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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-top: ${props => (props.seccond ? '0' : '10px')};
  a {
    color: ${colors.palette.white};
    display: flex;
    align-items: center;
    margin-right: 20px;
    &:hover {
      color: ${colors.palette.secondary};
      text-decoration: none;
    }
  }
  img {
    margin-right: 5px;
  }
  // ${breakpoint('sm')`
  //   height: 600px;
  // `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
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
  width: calc(70% + 120px);
  justify-content: space-around;
  font-size: 12px;
`;

export const Item = styled.li`
  cursor: pointer;
  &:hover {
    color: ${colors.palette.secondary};
  }
`;
