import styled from 'styled-components';
import { colors } from '../../global-styles';

export const Content = styled.footer`
  background-color: white;
  border-top: 1px dashed #bebdbb;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  color: #81807e;
  font-size: 10px;
  a {
    color: ${colors.palette.secondary};
  }
`;
