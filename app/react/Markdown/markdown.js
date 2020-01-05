/** @format */

import instanceMarkdownIt from 'markdown-it';
import jsx from 'markdown-it-jsx';
import mdContainer from 'markdown-it-container';

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

const transformMarkdown = (markdown, { allowHTML = false }) => {
  let renderer = markdownIt;
  if (allowHTML) {
    renderer = markdownItWithHtml;
  }

  return renderer.render(markdown);
};

export { transformMarkdown };
