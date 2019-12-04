/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectLogin from './selectors';
import saga from './saga';
import logo from '../../images/iconStore.png';
import Button from '../../components/Button';

import {
  Container,
  Header,
  Row,
  Content,
  Title,
  Form,
  Box,
  Input,
  Btn,
} from './styles';

export function Login() {
  useInjectSaga({ key: 'login', saga });

  const handleSumbit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Helmet>
        <title>login</title>
        <meta name="login" content="screen login" />
      </Helmet>
      <Header>
        <Row>
          <a href="/">
            <img src={logo} width="30" height="30" alt="Logo" />
            My Store
          </a>
        </Row>
      </Header>

      <Content>
        <Title>Enter Your Data To Login</Title>
        <Form onSubmit={handleSumbit}>
          <Box>
            <Row>
              <Input type="email" aria-label="email" placeholder="E-mail" />
            </Row>
            <Row>
              <Input
                type="password"
                aria-label="password"
                placeholder="Password"
              />
            </Row>
          </Box>
          <Btn>
            <Button noMargin big text="Login" type="submit" />
            <Link to="/forgotPassword">
              <span>Forgot Your Password?</span>
            </Link>
            <Link to="/">
              <span>Go Back</span>
            </Link>
          </Btn>
        </Form>
      </Content>
    </Container>
  );
}

Login.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
