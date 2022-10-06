import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  padding: 15px;
  width: 100%;
`;

export const ImgWrapper = styled.img`
  width: 700px;
`;

export const StyledLink = styled(NavLink)`
  transition: all 0.5s;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: white;
    background-color: #29a7f0;
  }
`;
