/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn } from './styles';

function Button(props) {
  return <WrapperBtn noMargin={props.noMargin}>{props.text}</WrapperBtn>;
}

Button.propTypes = {
  text: PropTypes.string,
  noMargin: PropTypes.bool,
};

export default Button;
