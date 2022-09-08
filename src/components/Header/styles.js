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
  align-items: center;
  font-weight: bold;
  gap: 1rem;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 710px) {
    font-size: 10px !important;
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
`;

export const Link = styled.li`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 710px) {
    gap: 0.5rem;
  }

  .selected {
    position: relative;
    color: #343578;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      top: 1.75rem;
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
      line-height: 1.8rem;

    @media screen and (max-width: 600px) {
      border-bottom: #343578 2px solid;
      line-height: 1.2rem;
    }

    @media screen and (min-width: 900px) {
      line-height: 1.8rem;
    }

    @media screen and (min-width: 1024px) {
      line-height: 2.2rem;
    }

    &::before {
      display: none;
    }
  }
`;
