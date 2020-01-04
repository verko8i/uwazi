/** @format */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import rison from 'rison';

import CustomComponents from './components';
import CustomHookComponents from './CustomHooks';

import markdownToReact from './markdownToReact';

const Dataset = () => null;
const placeholder = ({ children }) => children;

class MarkdownViewer extends Component {
  static errorHtml(index, message) {
    return (
      <p key={index} className="error">
        <br />
        <strong>
          <i>Custom component markup error: unsuported values! Please check your configuration</i>
        </strong>
        <br />
        {message}
        <br />
      </p>
    );
  }

  static customHook(config) {
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
  }

  inlineComponent(type, config, index) {
    const { compact } = this.props;
    let result;
    if (type === 'list') {
      result = this.list(config, index);
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
      result = MarkdownViewer.customHook(config, index);
    }
    return result;
  }

  customComponent(type, config, index, children) {
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
      return MarkdownViewer.errorHtml(index, error.message);
    }

    return false;
  }

  list() {
    const listData = this.props.lists[this.renderedLists] || {};
    const output = `<ItemList link="/library/${listData.params}" items='{${JSON.stringify(
      listData.items
    )}}' options='{${JSON.stringify(listData.options) || '{}'}}' />`;
    this.renderedLists += 1;
    return output;
  }

  render() {
    this.renderedLists = 0;

    const ReactFromMarkdown = markdownToReact(
      this.props.markdown,
      this.customComponent.bind(this),
      this.props.html
    );

    if (!ReactFromMarkdown) {
      return false;
    }

    return <div className="markdown-viewer">{ReactFromMarkdown}</div>;
  }
}

MarkdownViewer.defaultProps = {
  lists: [],
  markdown: '',
  html: false,
  compact: false,
};

MarkdownViewer.propTypes = {
  markdown: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.object),
  html: PropTypes.bool,
  compact: PropTypes.bool,
};

export default MarkdownViewer;
