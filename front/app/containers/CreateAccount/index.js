/**
 *
 * CreateAccount
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
import makeSelectCreateAccount from './selectors';
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

export function CreateAccount() {
  useInjectSaga({ key: 'createAccount', saga });

  const handleSumbit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Helmet>
        <title>Create Account</title>
        <meta name="createAccoun" content="screen to create account" />
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
        <Title>Complete Your Data</Title>
        <Form onSubmit={handleSumbit}>
          <Box>
            <Row>
              <Input type="text" aria-label="name" placeholder="Name" />
              <Input type="text" aria-label="surname" placeholder="Surname" />
            </Row>
            <Row>
              <Input type="email" aria-label="email" placeholder="E-mail" />
              <Input
                type="password"
                aria-label="password"
                placeholder="Password"
              />
            </Row>
          </Box>
          <Btn>
            <Button noMargin big text="Create Account" type="submit" />
            <Link to="/">
              <span>Go Back</span>
            </Link>
          </Btn>
        </Form>
      </Content>
    </Container>
  );
}

CreateAccount.propTypes = {};

const mapStateToProps = createStructuredSelector({
  createAccount: makeSelectCreateAccount(),
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

export default compose(withConnect)(CreateAccount);
