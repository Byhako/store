/* eslint-disable prettier/prettier */
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
  ${breakpoint('lg')`
    display: flex;
    padding-top: ${props => (props.seccond ? '0' : '10px')};
  `}
`;

export const Btn = styled.div`
  display: flex;
  margin: 0 auto;
  i {
    cursor: pointer;
    font-size: 22px;
    &:hover {
      color: ${colors.palette.secondary};
    }
  }
  ${breakpoint('lg')`
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
  a {
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin: 0;
    &:hover {
      color: ${colors.palette.secondary};
    }
  }
`;

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  position: absolute;
  right: 40px;
  top: 24px;
  a {
    margin: 0;
    min-width: 25px;
  }
  &:hover {
    color: ${colors.palette.secondary};
  }
`;

export const Spacer = styled.div`
  width: 10px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  p {
    font-family: inherit;
    margin: 5px 0;
  }
  ${breakpoint('lg')`
    display: none;
  `}
`;

export const Section = styled.section`
  padding: 10px;
  border-bottom: ${props => (props.end ? 'none' : `1px dashed ${colors.palette.gray1}`)};
`;

export const Line = styled.div`
  display: flex;
  justify-content: ${props => (props.btn ? 'space-around' : 'start')};
  align-items: center;
  padding: 5px 0;
  a {
    color: black;
    &:hover {
      color: ${colors.palette.secondary};
    }
  }
  i {
    margin-right: 5px;
    width: 15px;
  }
`;
