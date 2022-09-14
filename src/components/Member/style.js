import styled from "styled-components";

export const Wrapper = styled.a`
  display: inline-block;
  background-color: beige;
  border-radius: 50%;
  width: ${({ width }) => width}rem;
  height: ${({ width }) => width}rem;
  transition: 0.3s;

  img {
    border-radius: 50%;
    width: 100%;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;
