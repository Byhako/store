/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUsername } from './selectors';
import saga from './saga';

const key = 'home';

export function HomePage() {
  useInjectSaga({ key, saga });

  return <div>HOLA</div>;
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
