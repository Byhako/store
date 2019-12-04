import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { colors } from '../../global-styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${colors.palette.primary};
  padding-top: 10px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  padding-top: 0;
  a {
    color: ${colors.palette.white};
    display: flex;
    align-items: center;
    margin-right: 20px;
    min-width: 100px;
    font-size: 1rem;
    &:hover {
      color: ${colors.palette.secondary};
      text-decoration: none;
    }
  }
  img {
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  margin-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding-bottom: 20px;
  ${breakpoint('md')`
    background-color: inherit;
    width: 60%;
    margin-top: 50px;
    padding: 0;
  `}
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  margin-top: 20px;
  ${breakpoint('md')`
    text-align: inherit;
    margin-top: 0px;

  `}
`;

export const Form = styled.form``;

export const Box = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 0;
  ${breakpoint('md')`
    margin-bottom: 20px;
  `}
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.palette.gray1};
  margin: 20px 0;
  padding: 2px 5px;
  &:focus {
    outline: none;
    border: 0;
    border-bottom: 2px solid ${colors.palette.secondary};
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  a {
    color: ${colors.palette.button};
    margin: 10px 0 0;
    &:hover {
      color: ${colors.palette.secondary};
      text-decoration-color: ${colors.palette.secondary};
    }
  }
  ${breakpoint('md')`
    justify-content: inherit;
    flex-direction: row;
    a {
      margin: 0px 0 0 20px;
    }
  `}
`;
