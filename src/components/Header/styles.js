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

  @media screen and (max-width: 800px) {
    font-size: 9px;
    gap: 0.8rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
    gap: 2rem;
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
        top: 2rem;
        background-color: #343578;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.5s ease;

        @media screen and (max-width: 700px) {
          top: 1rem;
          height: 2px;
        }

        @media screen and (min-width: 1024px) {
          top: 1.5rem;
          height: 3px;
        }
      }

      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
`;
