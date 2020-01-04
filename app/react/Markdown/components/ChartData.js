/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqueID from 'shared/uniqueID';

import Immutable from 'immutable';

import Loader from 'app/components/Elements/Loader';
import { arrayUtils } from 'app/Charts';

const cloneElement = (element, props) => {
  return React.isValidElement(element)
    ? React.cloneElement(element, { ...props, key: uniqueID() })
    : element;
};

const renderChildren = (children, props) => {
  return Array.isArray(children)
    ? children.map(child => cloneElement(child, props))
    : cloneElement(children, props);
};

export const ChartData = props => {
  const { excludeZero, maxCategories, property, data, context, thesauris } = props;
  let output = <Loader />;

  if (data) {
    const aggregateOthers = props.aggregateOthers === 'true';
    const formattedData = arrayUtils.sortValues(
      arrayUtils.formatDataForChart(data, property, thesauris, {
        excludeZero: Boolean(excludeZero),
        context: '58ad7d240d44252fee4e6208',
        maxCategories,
        aggregateOthers,
      })
    );

    const clonedProps = {
      data: formattedData,
    };
    // output = React.cloneElement(props.children, clonedProps);
    output = renderChildren(props.children, clonedProps);
  }

  return output;
};

ChartData.defaultProps = {
  context: 'System',
  excludeZero: false,
  maxCategories: '0',
  aggregateOthers: 'false',
  data: null,
};

ChartData.propTypes = {
  thesauris: PropTypes.instanceOf(Immutable.List).isRequired,
  // property: PropTypes.string.isRequired,
  // context: PropTypes.string,
  excludeZero: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  maxCategories: PropTypes.string,
  aggregateOthers: PropTypes.string,
  data: PropTypes.instanceOf(Immutable.List),
};

export const mapStateToProps = state => ({
  thesauris: state.thesauris,
});

export default connect(mapStateToProps)(ChartData);
