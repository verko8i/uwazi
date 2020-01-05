/** @format */

import PropTypes from 'prop-types';
import React from 'react';

import { hooksToJSX } from './oldHooksParser';
import { transformMarkdown } from './markdown.js';
import { htmlToReact } from './markdownToReact';

const MarkdownViewer = ({ compact, html, markdown, lists }) => {
  const ReactTree = htmlToReact(
    transformMarkdown(hooksToJSX(markdown, { compact, lists }), { allowHTML: html })
  );

  if (!ReactTree) {
    return false;
  }

  return <div className="markdown-viewer">{ReactTree}</div>;
};

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
