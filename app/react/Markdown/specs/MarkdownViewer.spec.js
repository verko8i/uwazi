/* eslint-disable max-statements */
import React, { Component } from 'react';

import { shallow } from 'enzyme';

import MarkdownViewer from '../MarkdownViewer';
import CustomComponents from '../components';

describe('MarkdownViewer', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      markdown: '## MarkdownContent'
    };
  });

  const render = () => {
    component = shallow(<MarkdownViewer {...props} />);
  };

  const matchSnapshot = () => {
    render();
    expect(component).toMatchSnapshot();
  };

  describe('render', () => {
    describe('when markdown is empty', () => {
      it('should not render anything', () => {
        props.markdown = '';
        component = shallow(<MarkdownViewer {...props} />);
        expect(component.html()).toBe(null);
      });
    });

    it('should render markdown', () => {
      props.markdown = `## title\nSome text with a [URL](http://google.com) inside.
        \n\nWhich should be in its own line, separated with TWO line breaks (to create a new <p> Element)
        \n\n\`\`\`javascript\nCode\n\`\`\`
      `;

      render();
      expect(component.html()).toMatchSnapshot();
    });

    it('should remove whitespaces between table tags (to prevent react warning)', () => {
      props.markdown = `
| cadh | cbdp | cidfp | cipst |
| - | - | - | - |
| 1.1,25.1 |  |  |  |
| 1.1,21.1,21.2,25,1 |  |  |  |
      `;

      render();
      expect(component.html()).toMatchSnapshot();
    });

    it('should support containers with custom classNames', () => {
      props.markdown = '::: test classname \ntext inside a div';

      matchSnapshot();
    });

    it('should render media components', () => {
      props.html = true;
      props.markdown = `<div>{vimeo}(1234, options)</div>
      \n\n{youtube}(1234)
      \n\n{media}(config options)
      `;

      render();
      expect(component.debug()).toMatchSnapshot();
    });

    it('should render list components', () => {
      props.html = true;
      props.lists = [
        { params: 'param1', items: ['items1'], options: { option1: 'optionValue' } },
        { params: 'param2', items: ['items2'] },
        { params: 'param3', items: ['items3'] }
      ];

      props.markdown = `{list}(first list)
        \n\n{list}(http://secondList)
        \n\n{list}(asd)
      `;

      render();

      expect(component.find(CustomComponents.ItemList).at(0).props()).toEqual(expect.objectContaining({
        link: '/library/param1',
        items: ['items1'],
        options: { option1: 'optionValue' }
      }));

      expect(component.find(CustomComponents.ItemList).at(1).props()).toEqual(expect.objectContaining({
        link: '/library/param2',
        items: ['items2'],
        options: {}
      }));

      expect(component.find(CustomComponents.ItemList).at(2).props()).toEqual(expect.objectContaining({
        link: '/library/param3',
        items: ['items3'],
        options: {}
      }));
    });

    it('should parse props surrounded by {} a la JSX', () => {
      CustomComponents.customComponent = class customComponent extends Component {
        render() {
          return <p>Custom</p>;
        }
      };
      props.html = true;

      props.markdown = `<customComponent 
      array="{[ 'test' ]}"
      arrayWIthObject="{[ 'test', { key: 'value' } ]}"
      object="{{ key: 'value', nestedArray: ['test'], nestedObject: { key: 'value' }}}"
      boolTrue="{true}"
      boolFalse="{false}"
      number="{5}"
      anotherNumber="{5678}"
      float="{56.78}"
      string="string"
      />`;

      render();
      expect(component.find(CustomComponents.customComponent).at(0).props()).toEqual(expect.objectContaining({
        array: ['test'],
        arrayWIthObject: ['test', { key: 'value' }],
        object: { key: 'value', nestedArray: ['test'], nestedObject: { key: 'value' }},
        boolTrue: true,
        boolFalse: false,
        number: 5,
        anotherNumber: 5678,
        float: 56.78,
        string: 'string',
      }));
    });

    it('should render customHook components and show an error for invalid ones', () => {
      CustomComponents.validcomponent = class customComponent extends Component {
        render() {
          return <p>Custom</p>;
        }
      };
      props.html = true;

      props.markdown = `
        \n\n{customhook}(component:validcomponent,prop:'a prop',array:!((child:!(a),bool:!t),(child:!(b))))
        \n\nShould allow markdown between hooks
        \n\n{customhook}(component:validcomponent)
      `;

      render();
      expect(component.find('customComponent').length).toBe(2);
      expect(component.find('customComponent').at(0).props()).toEqual(expect.objectContaining({
        array: [{ bool: true, child: ['a'] }, { child: ['b'] }]
      }));
    });

    it('should be able to render properly custom components not separated by \\n\\n', () => {
      props.html = true;
      props.markdown = '{youtube}(youtubeUrl)\n{media}(mediaUrl)';

      render();
      expect(component).toMatchSnapshot();
    });

    it('should not render html by default', () => {
      props.markdown = '<div><h1>should be all a escaped string</h1></div>';

      render();
      expect(component.html()).toMatchSnapshot();
    });

    it('should render Link', () => {
      props.html = true;
      props.markdown = '{link}(url:this_is_the_url,label:\'this is a label\')' +
        '\n<MarkdownLink url="the_url">label</MarkdownLink>';

      render();
      expect(component.debug()).toMatchSnapshot();
    });

    describe('when passing html true prop', () => {
      it('should render html', () => {
        props.html = true;
        props.markdown = '<div><h1>test</h1></div>';

        render();
        expect(component.html()).toMatchSnapshot();
      });

      it('should render customComponents nested inside html', () => {
        props.html = true;
        props.lists = [
          { params: 'param1', items: ['items1'], options: { option1: 'optionValue' } },
        ];
        props.markdown = '<div>{list}(url)(options) <div>\n{youtube}(url)</div></div>';

        render();
        expect(component).toMatchSnapshot();
      });
    });

    describe('when not valid html', () => {
      it('should not fail', () => {
        props.markdown = '<div><h</div>';
        props.html = true;

        render();
        expect(component.html()).toMatchSnapshot();
      });
    });

    it('should render a searchbox', () => {
      props.html = true;
      props.markdown = '{searchbox}(placeholder:\'this is a placeholder\')';

      render();
      expect(component.debug()).toMatchSnapshot();
    });

    it('should render single tags as self closing', () => {
      props.html = true;
      props.markdown = '' +
        'test\n\n' +
        '***\n' +
        'test';

      render();
      expect(component.debug()).toMatchSnapshot();
    });

    it('should render properly a selfclosing XML tags', () => {
      props.html = true;
      props.markdown = '' +
        'test\n\n' +
        '<SearchBox/>\n' +
        '<div>test</div>';

      render();
      expect(component.debug()).toMatchSnapshot();
    });

    it('should remove Dataset and Query tags', () => {
      props.html = true;
      props.markdown = '' +
        'test\n\n' +
        '<Dataset />\n' +
        '<Query />\n' +
        '<SearchBox/>\n' +
        '<Dataset name="test" />\n' +
        '<div>test</div>';

      render();
      expect(component).toMatchSnapshot();
    });
  });
});
