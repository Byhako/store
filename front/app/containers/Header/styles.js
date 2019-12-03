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
  ${breakpoint('sm')`
    display: flex;
    padding-top: ${props => (props.seccond ? '0' : '10px')};
  `}
`;

export const Btn = styled.div`
  display: ${props => (props.small ? 'flex' : 'none')};
  margin: 0 auto;
  i {
    cursor: pointer;
    &:hover {
      color: ${colors.palette.secondary};
    }
  }
  ${breakpoint('sm')`
    display: ${props => (props.big ? 'flex' : 'none')};
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
  ${breakpoint('md')`
    width: 70%;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  width: 100%;
  justify-content: space-around;
  font-size: 12px;
`;

export const Item = styled.li`
  cursor: pointer;
  &:hover {
    color: ${colors.palette.secondary};
  }
`;
