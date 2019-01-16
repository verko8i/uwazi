import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Welcome from 'app/Library/components/Welcome';
import LibraryFilters from 'app/Library/components/LibraryFilters';
import Helmet from 'react-helmet';
import ViewMetadataPanel from 'app/Library/components/ViewMetadataPanel';
import SelectMultiplePanelContainer from 'app/Library/containers/SelectMultiplePanelContainer';
import { t } from 'app/I18N';
import blankState from './helpers/blankState';

import SemanticSearchPanel from 'app/SemanticSearch/components/SemanticSearchPanel';

export default class LibraryLayout extends Component {
  render() {
    if (blankState()) {
      return <Welcome/>;
    }

    return (
      <div className="row panels-layout">
        <Helmet title={t('System', 'Library', null, false)} />
        <main className={`library-viewer document-viewer with-panel ${this.props.className}`}>
          {this.props.children}
        </main>
        <LibraryFilters storeKey="library"/>
        <ViewMetadataPanel storeKey="library"/>
        <SelectMultiplePanelContainer storeKey="library"/>
        <SemanticSearchPanel storeKey="library" />
      </div>
    );
  }
}

LibraryLayout.defaultProps = {
  className: ''
};

LibraryLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string
};
