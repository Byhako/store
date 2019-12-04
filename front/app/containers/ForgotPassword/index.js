/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import makeSelectForgotPassword from './selectors';
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

export function ForgotPassword() {
  useInjectSaga({ key: 'forgotPassword', saga });

  const handleSumbit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="forgot password" content="Recovery password" />
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
        <Title>We Will Send a Message to Your Email</Title>
        <Form onSubmit={handleSumbit}>
          <Box>
            <Row>
              <Input type="email" aria-label="email" placeholder="E-mail" />
            </Row>
            <Row>
              <Input
                type="email"
                aria-label="email"
                placeholder="Confirm E-mail"
              />
            </Row>
          </Box>
          <Btn>
            <Button noMargin big text="Send" type="submit" />
            <Link to="/">
              <span>Go Back</span>
            </Link>
          </Btn>
        </Form>
      </Content>
    </Container>
  );
}

ForgotPassword.propTypes = {};

const mapStateToProps = createStructuredSelector({
  forgotPassword: makeSelectForgotPassword(),
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

export default compose(withConnect)(ForgotPassword);
