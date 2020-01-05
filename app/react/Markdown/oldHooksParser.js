/** @format */

import rison from 'rison';
import CustomComponents from './components';

const customComponentMatcher = '{\\w+}\\(.+\\)\\(.+\\)|{\\w+}\\(.+\\)';

const customHook = config => {
  const params = rison.decode(config);
  if (!CustomComponents[params.component]) {
    throw new Error('Invalid  component');
  }
  const props = Object.keys(params).reduce((memo, key) => {
    if (typeof params[key] === 'string') {
      return memo + ` ${key}="${params[key]}"`;
    }
    return memo + ` ${key}='{${JSON.stringify(params[key])}}'`;
  }, '');
  return `<${params.component}${props} />`;
};

let renderedLists = 0;
const list = lists => {
  const listData = lists[renderedLists] || {};
  const output = `<ItemList link="/library/${listData.params}" items='{${JSON.stringify(
    listData.items
  )}}' options='{${JSON.stringify(listData.options) || '{}'}}' />`;
  renderedLists += 1;
  return output;
};

const toComponentString = (type, config, { compact, lists }) => {
  let result;
  if (type === 'list') {
    result = list(lists);
  }

  if (type === 'link') {
    const params = rison.decode(config);
    result = `<Link url="${params.url}">${params.label}</Link>`;
  }

  if (type === 'searchbox') {
    const params = rison.decode(config);
    const props = Object.keys(params).reduce((memo, key) => {
      return memo + ` ${key}="${params[key]}"`;
    }, '');
    result = `<SearchBox${props}/>`;
  }

  if (['vimeo', 'youtube', 'media'].includes(type)) {
    result = `<MarkdownMedia config="${config}" compact={${compact}} />`;
  }

  if (type === 'customhook') {
    result = customHook(config);
  }
  return result;
};

const getConfig = string => {
  const customComponentOptionsMatcher = /{\w+}(\(.+\)\(.+\))|{\w+}(\(.+\))/g;
  let config;
  const configMatch = customComponentOptionsMatcher.exec(string);
  if (configMatch) {
    config = configMatch[1] || configMatch[2];
  }

  return config;
};

const replaceCustomComponents = (markdown, options) => {
  const matches = markdown.match(/{(.+)}\(.+\)/g) || [];
  let result = markdown;
  matches.forEach(match => {
    const componentName = match.match(/{(.+)}/)[1];
    const componentConfig = getConfig(match);
    result = result.replace(match, toComponentString(componentName, componentConfig, options), 'g');
  });
  return result;
};

const hooksToJSX = (text, { compact = false, lists = [] }) => {
  renderedLists = 0;
  const markdown = text.replace(new RegExp(`(${customComponentMatcher})`, 'g'), '$1\n');
  return replaceCustomComponents(markdown, { compact, lists });
};

export { hooksToJSX };
