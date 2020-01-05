/** @format */

import React from 'react';

import HtmlToReact, { Parser } from 'html-to-react';
import CustomComponents from './components';

const myParser = new Parser({ xmlMode: true });
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

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

const RenderComponent = (type, config, index, children) => {
  try {
    if (typeof type === 'function') {
      const Element = type;
      return (
        <Element {...config} key={index}>
          {children}
        </Element>
      );
    }

    if (type) {
      return this.inlineComponent(type, config, index);
    }
  } catch (error) {
    throw error;
    // return MarkdownViewer.errorHtml(index, error.message);
  }

  return false;
};

function isDescendantTableTag(parent, node) {
  const descendants = {
    table: ['colgroup', 'thead', 'tbody'],
    colgroup: ['col'],
    thead: ['tr'],
    tbody: ['tr'],
    tr: ['th', 'td'],
  };

  if (!parent.name || !node.name) {
    return false;
  }

  return (descendants[parent.name] || []).indexOf(node.name) >= 0;
}

const ignoreWhitespaceBetweenTableTags = {
  shouldProcessNode(node) {
    if (node.type === 'text' && node.parent) {
      if (node.next) {
        return isDescendantTableTag(node.parent, node.next);
      }
      if (node.prev) {
        return isDescendantTableTag(node.parent, node.prev);
      }
    }
    return false;
  },
  processNode() {
    return null;
  },
};

const htmlToReact = html => {
  const isValidNode = node => {
    const isBadNode = node.type === 'tag' && node.name.match(/<|>/g);
    if (isBadNode) {
      return false;
    }
    return true;
  };

  const processingInstructions = [
    ignoreWhitespaceBetweenTableTags,
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
        const newNode = RenderComponent(type, config, index, children);

        return newNode || processNodeDefinitions.processDefaultNode(node, children, index);
      },
    },
  ];

  return myParser.parseWithInstructions(html, isValidNode, processingInstructions);
};

export { htmlToReact };
