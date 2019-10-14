import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import { Icon } from 'UI';

export class ThesauriFormField extends Component {
  constructor(props) {
    super(props);
    this.focus = () => { this.groupInput.focus(); };
  }

  renderValue(value, index, groupIndex) {
    const { removeValue, isDuplicated } = this.props;
    let model = `thesauri.data.values[${index}].label`;
    if (groupIndex !== undefined) {
      model = `thesauri.data.values[${groupIndex}].values[${index}].label`;
    }
    return (
      <div key={`item-${groupIndex || ''}${index}`}>
        <Field model={model}>
          <input className="form-control" type="text" placeholder="Item name" />
          {!groupIndex && isDuplicated && (
          <div className="validation-error">
            <Icon icon="exclamation-triangle" size="xs" /> Duplicated name
          </div>
          )}
          <button
            tabIndex={index + 500}
            type="button"
            className="btn btn-xs btn-danger"
            onClick={removeValue.bind(null, index, groupIndex)}
          >
            <Icon icon="trash-alt" /> Delete
          </button>
        </Field>
      </div>
    );
  }

  render() {
    const { value, index, groupIndex } = this.props;
    return this.renderValue(value, index, groupIndex);
  }
}

ThesauriFormField.defaultProps = {
  groupIndex: undefined
};

ThesauriFormField.propTypes = {
  removeValue: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  groupIndex: PropTypes.number,
  isDuplicated: PropTypes.bool,
};

export default ThesauriFormField;
