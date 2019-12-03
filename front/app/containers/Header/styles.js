import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { colors } from '../../global-styles';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${colors.palette.primary};
  padding-top: 10px;
`;

export const Row = styled.div`
  display: ${props => (props.seccond ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-top: 0;
  a {
    color: ${colors.palette.white};
    display: flex;
    align-items: center;
    margin-right: 20px;
    min-width: 30px;
    font-size: 0;
    &:hover {
      color: ${colors.palette.secondary};
      text-decoration: none;
    }
    ${breakpoint('xs')`
      font-size: 1rem;
      min-width: 100px;
    `}
  }
  img {
    margin-right: 5px;
  }
  ${breakpoint('md')`
    display: flex;
    padding-top: ${props => (props.seccond ? '0' : '10px')};
  `}
`;

export const Btn = styled.div`
  display: flex;
  margin: 0 auto;
  i {
    cursor: pointer;
    &:hover {
      color: ${colors.palette.secondary};
    }
  }
  ${breakpoint('md')`
    display: none;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  input {
    width: calc(100% - 24px);
    border: none;
    padding: 0 10px;
    height: 24px;
    font-size: 14px;
  }
  button {
    height: 24px;
    width: 24px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #494848;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  width: 60%;
  justify-content: space-around;
  font-size: 12px;
  padding: 0;
  margin-left: 120px;
`;

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  position: ${props => (props.btn ? 'absolute' : 'initial')};
  right: 20px;
  &:hover {
    color: ${colors.palette.secondary};
  }
`;

export const Spacer = styled.div`
  width: 10px;
`;
