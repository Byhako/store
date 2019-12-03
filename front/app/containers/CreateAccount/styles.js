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
  margin-top: 30px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Form = styled.form``;

export const Box = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 40%;
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
