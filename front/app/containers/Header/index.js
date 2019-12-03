/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectHeader from './selectors';
import saga from './saga';

import logo from '../../images/iconStore.png';
import Button from '../../components/Button';
import { Nav, Row, Form, List, Item, Btn, Spacer } from './styles';

export function Header() {
  useInjectSaga({ key: 'header', saga });

  return (
    <Nav>
      <Row>
        <a href="/">
          <img src={logo} width="30" height="30" alt="Logo" />
          My Store
        </a>
        <Form>
          <input type="search" aria-label="Search" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </Form>

        <Btn small>
          <i className="fas fa-bars" />
        </Btn>
      </Row>

      <Row seccond>
        <List>
          <Item>Categories</Item>
          <Item>Offers</Item>
          <Item>Sell</Item>
          <Item>Help</Item>
        </List>
        <Item btn>
          <Button noMargin text="Create Account" />
          <Spacer />
          <Button noMargin text="Login" />
        </Item>
      </Row>
    </Nav>
  );
}

Header.propTypes = {};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);
