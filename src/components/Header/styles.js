import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 6rem;
  justify-content: center;

  li:last-child {
    img {
      display: none;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 710px) {
    gap: 0.5rem;
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.125rem;
  gap: 1rem;

  @media screen and (max-width: 710px) {
    font-size: 11px !important;
    gap: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 868px) {
    font-size: 14px;
  }

  img {
    @media screen and (max-width: 540px) {
      width: 8px;
    }
  }

  .selected {
    position: relative;
    color: #343578;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      top: 1.6rem;
      height: 3px;
      background-color: #343578;
      transform: scaleX(0);
      transform-origin: top left;
      transition: transform 0.5s ease;

      @media screen and (max-width: 868px) {
        display: none;
      }
      @media screen and (max-width: 1024px) {
        top: 1.4rem;
      }
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
  .selected.active {
    border-bottom: #343578 4px solid;
    line-height: 2.2rem;

    @media screen and (max-width: 768px) {
      border-bottom: #343578 3px solid;
    }

    @media screen and (max-width: 540px) {
      border-bottom: #343578 2px solid;
      line-height: 1.6rem;
    }

    &::before {
      display: none;
    }
  }
`;
