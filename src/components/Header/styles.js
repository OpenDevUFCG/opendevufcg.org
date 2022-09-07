import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 6rem;
  justify-content: center;
`;

export const Links = styled.ul`
  display: flex;
  gap: 3rem;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 10px;
    gap: 0.5rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 9px;
    gap: 0.4rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    gap: 1.5rem;
  }

  li {
    a {
      position: relative;
      color: #343578;
      text-decoration: none;
      font-family: sans-serif;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        top: 1.8rem;
        background-color: #343578;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.5s ease;

        @media screen and (max-width: 480px) {
          top: 1rem;
          height: 2px;
        }

        @media (min-width: 768px) {
          top: 1.5rem;
        }
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
`;
