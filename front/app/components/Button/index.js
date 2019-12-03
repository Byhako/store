/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn } from './styles';

function Button(props) {
  return <WrapperBtn>{props.text}</WrapperBtn>;
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
