/** @format */

import React from 'react';

import HtmlToReact, { Parser } from 'html-to-react';
import instanceMarkdownIt from 'markdown-it';
import jsx from 'markdown-it-jsx';
import mdContainer from 'markdown-it-container';
import CustomComponents from './components';

const myParser = new Parser({ xmlMode: true });
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const customComponentMatcher = '{\\w+}\\(.+\\)\\(.+\\)|{\\w+}\\(.+\\)';

const dynamicCustomContainersConfig = {
  validate() {
    return true;
  },
  render(tokens, idx) {
    const token = tokens[idx];

    if (token.type === 'container_dynamic_open') {
      return `<div class="${token.info.trim()}">`;
    }
    return '</div>';
  },
};

const markdownIt = instanceMarkdownIt({ xhtmlOut: true }).use(
  mdContainer,
  'dynamic',
  dynamicCustomContainersConfig
);
const markdownItWithHtml = instanceMarkdownIt({ html: true, xhtmlOut: true }).use(
  mdContainer,
  'dynamic',
  dynamicCustomContainersConfig
);
markdownItWithHtml.use(jsx);

const getConfig = string => {
  const customComponentOptionsMatcher = /{\w+}(\(.+\)\(.+\))|{\w+}(\(.+\))/g;
  let config;
  const configMatch = customComponentOptionsMatcher.exec(string);
  if (configMatch) {
    config = configMatch[1] || configMatch[2];
  }

  return config;
};

const replaceCustomComponents = (html, callback) => {
  const matches = html.match(/{(.+)}\(.+\)/g) || [];
  let result = html;
  matches.forEach(match => {
    const componentName = match.match(/{(.+)}/)[1];
    const componentConfig = getConfig(match);
    result = result.replace(match, callback(componentName, componentConfig), 'g');
  });
  return result;
};

const removeWhitespacesInsideTableTags = html =>
  html
    .replace(
      /((\/)?(table|thead|tbody|tr|th|td)>)[\s\n]+(<(\/)?(table|thead|tbody|tr|th|td))/g,
      '$1$4'
    )
    .replace(
      /((\/)?(table|thead|tbody|tr|th|td)>)[\s\n]+(<(\/)?(table|thead|tbody|tr|th|td))/g,
      '$1$4'
    );

function strToJS(str) {
  let obj = {};
  if (str && typeof str === 'string') {
    let objStr = str.match(/^\[(.+)\]$/g);
    if (!objStr) {
      objStr = str.match(/\{(.*)\}/g);
    }

    if (!objStr) {
      objStr = str.match(/true|false/g);
    }
    if (!objStr) {
      objStr = str.match(/[0-9.]+/g);
    }
    if (!objStr) {
      return str;
    }
    eval(`obj =${objStr[0]}`);
  }
  return obj;
}

const parseProp = str => {
  const match = str.match(/^{(.*)}$/);
  if (match) {
    return strToJS(match[1]);
  }
  return str;
};

const parseConfig = config =>
  Object.keys(config || {}).reduce((memo, key) => ({ ...memo, [key]: parseProp(config[key]) }), {});

const getNodeTypeAndConfig = (config, node) => {
  const components = Object.keys(CustomComponents).reduce(
    (map, key) => Object.assign({}, map, { [key.toLowerCase()]: CustomComponents[key] }),
    {}
  );

  const availableComponents = Object.keys(components);

  const type = availableComponents.includes(node.name ? node.name.toLowerCase() : '')
    ? components[node.name.toLowerCase()]
    : null;

  return {
    type,
    config: parseConfig(config),
  };
};

export default (_markdown, callback, withHtml = false) => {
  let renderer = markdownIt;
  if (withHtml) {
    renderer = markdownItWithHtml;
  }

  const markdown = _markdown.replace(new RegExp(`(${customComponentMatcher})`, 'g'), '$1\n');

  const html = removeWhitespacesInsideTableTags(
    renderer.render(replaceCustomComponents(markdown, callback))
  );

  const isValidNode = node => {
    const isBadNode = node.type === 'tag' && node.name.match(/<|>/g);
    if (isBadNode) {
      return false;
    }
    return true;
  };

  const processingInstructions = [
    {
      shouldProcessNode() {
        return true;
      },

      processNode: (node, children, index) => {
        if (
          node.name &&
          (node.name.toLowerCase() === 'dataset' || node.name.toLowerCase() === 'query')
        ) {
          return false;
        }

        const { type, config } = getNodeTypeAndConfig(node.attribs, node);
        const newNode = callback(type, config, index, children);

        return newNode || processNodeDefinitions.processDefaultNode(node, children, index);
      },
    },
  ];

  return myParser.parseWithInstructions(html, isValidNode, processingInstructions);
};
