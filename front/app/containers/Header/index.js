/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import makeSelectHeader from './selectors';
import saga from './saga';

import logo from '../../images/iconStore.png';
import Button from '../../components/Button';
import {
  Nav,
  Row,
  Form,
  List,
  Item,
  Btn,
  Spacer,
  Menu,
  Line,
  Section,
} from './styles';

export function Header() {
  useInjectSaga({ key: 'header', saga });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
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

          <Btn small onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </Btn>
        </Row>

        <Row seccond>
          <List>
            <Link to="/">Categories</Link>
            <Link to="/">Offers</Link>
            <Link to="/">Sell</Link>
            <Link to="/">Help</Link>
            <Link to="/">Contact us</Link>
          </List>

          <Item>
            <Link to="/createAccount">
              <Button noMargin text="Create Account" />
            </Link>
            <Spacer />
            <Link to="/login">
              <Button noMargin text="Login" />
            </Link>
          </Item>
        </Row>
      </Nav>

      {showMenu && (
        <Menu>
          <Section>
            <p className="title">Welcome</p>
            <Line btn>
              <Link to="/createAccount">
                <Button noMargin small long text="Create Account" />
              </Link>
              <Link to="/login">
                <Button noMargin small long text="Login" />
              </Link>
            </Line>
          </Section>
          <Section end>
            <Line>
              <Link to="/">
                <i className="fas fa-clipboard-list" />
                Categories
              </Link>
            </Line>
            <Line>
              <Link to="/">
                <i className="fab fa-angellist" />
                Offers
              </Link>
            </Line>
            <Line>
              <Link to="/">
                <i className="fas fa-donate" />
                Sell
              </Link>
            </Line>
            <Line>
              <Link to="/">
                <i className="far fa-comment-dots" />
                Contact us
              </Link>
            </Line>
            <Line>
              <Link to="/">
                <i className="fas fa-question" />
                Help
              </Link>
            </Line>
          </Section>
        </Menu>
      )}
    </div>
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
