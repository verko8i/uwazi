/** @format */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { t } from 'app/I18N';
import { Icon } from 'UI';

export class LibraryButtons extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.props.reset(this.props.storeKey);
  }

  render() {
    return (
      <div className="sidepanel-footer">
        <span onClick={this.reset} className="btn btn-primary">
          <Icon icon="sync" />
          <span className="btn-label">{t('System', 'Reset')}</span>
        </span>
        <button type="submit" form="filtersForm" className="btn btn-success">
          <Icon icon="search" />
          <span className="btn-label">{t('System', 'Search')}</span>
        </button>
        <button type="submit" form="filtersForm" className="btn btn-success">
          <Icon icon="plus" />
          <span className="btn-label">{t('System', 'New Entity')}</span>
        </button>
        <button type="submit" form="filtersForm" className="btn btn-success">
          <Icon icon="upload" />
          <span className="btn-label">{t('System', 'Import CSV')}</span>
        </button>
      </div>
    );
  }
}

LibraryButtons.propTypes = {
  reset: PropTypes.func.isRequired,
  storeKey: PropTypes.string.isRequired,
};
