import styled from 'styled-components';
import { colors } from '../../global-styles';

export const WrapperBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  font-size: ${props => {
    if (props.big) {
      return '18px';
    }
    if (props.small) {
      return '12px';
    }
    return '14px';
  }};
  padding: 8px 15px;
  padding: ${props => (props.long ? '8px 30px' : '8px 15px')};
  background-color: ${colors.palette.button};
  color: ${colors.palette.white};
  border-bottom: 2px solid ${colors.palette.border};
  border-right: 2px solid ${colors.palette.border};
  cursor: pointer;
  margin: ${props => (props.noMargin ? '0' : '0 auto')};
  &:hover {
    color: ${colors.palette.secondary};
  }
  &:active {
    transform: scale(0.95);
  }
`;
