import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;

  padding: 2rem;
  height: calc(100vh - 6rem);
`;

export const Logo = styled.img`
  max-width: 500px;
  justify-self: center;
  flex-grow: 1;
`;

export const VICon = styled.img`
  cursor: pointer;
  max-width: 50px;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
