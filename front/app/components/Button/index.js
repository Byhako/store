/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn } from './styles';

function Button(props) {
  return (
    <WrapperBtn noMargin={props.noMargin} big={props.big}>
      {props.text}
    </WrapperBtn>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  noMargin: PropTypes.bool,
  big: PropTypes.bool,
};

export default Button;
