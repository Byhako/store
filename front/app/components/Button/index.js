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
    <WrapperBtn
      noMargin={props.noMargin}
      big={props.big}
      small={props.small}
      long={props.long}
    >
      {props.text}
    </WrapperBtn>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  noMargin: PropTypes.bool,
  big: PropTypes.bool,
  small: PropTypes.bool,
  long: PropTypes.bool,
};

export default Button;
