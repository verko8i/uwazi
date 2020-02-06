/** @format */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wrapDispatch } from 'app/Multireducer';

import { resetFilters } from 'app/Library/actions/filterActions';
import FiltersForm from 'app/Library/components/FiltersForm';
import DocumentTypesList from 'app/Library/components/DocumentTypesList';
import SidePanel from 'app/Layout/SidePanel';
import { t } from 'app/I18N';
import { LibraryButtons } from './LibraryButtons';

export class LibraryFilters extends Component {
  render() {
    const { reset, storeKey } = this.props;
    return (
      <SidePanel className="library-filters " open={this.props.open}>
        <LibraryButtons reset={reset} storeKey={storeKey} />
        <div className="sidepanel-body">
          <p className="sidepanel-title">{t('System', 'Filters configuration')}</p>
          <div className="documentTypes-selector nested-selector">
            <DocumentTypesList storeKey={this.props.storeKey} />
          </div>
          <FiltersForm storeKey={this.props.storeKey} />
        </div>
      </SidePanel>
    );
  }
}

LibraryFilters.propTypes = {
  reset: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  storeKey: PropTypes.string.isRequired,
};

export function mapStateToProps(state, props) {
  return {
    open:
      state[props.storeKey].ui.get('filtersPanel') !== false &&
      !state[props.storeKey].ui.get('selectedDocuments').size > 0,
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators({ reset: resetFilters }, wrapDispatch(dispatch, props.storeKey));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryFilters);
