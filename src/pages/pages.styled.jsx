import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  justify-content: center;
  gap: 13px;
`;

export const Img = styled.img`
  transition: transform 0.5s;
  width: 290px;
  height: 435px;

  &:hover {
    transform: scale(0.95);
  }
`;
