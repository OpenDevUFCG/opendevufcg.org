import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 42rem;
  max-height: 30rem;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: #393a6e;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
  float: right;
  margin: 0 0 3rem 3rem;

  @media only screen and (max-width: 430px) {
    padding: 0.6rem;
  }

  @media only screen and (max-width: 1080px) {
    float: none;
    margin: 0 auto;
  }
`;

export const OutContainer = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  max-width: inherit;
  max-height: inherit;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
  background-color: white;

  img {
    max-width: inherit;
    max-height: inherit;
    object-fit: cover;
    translate: ${({ translate }) => `-${translate}00%`};
    transition: 1s;
  }
`;

export const BackgroundImg = styled.img`
  object-fit: cover;
  height: 27rem;
`;

export const DotsContainer = styled.div`
  position: absolute;
  left: 40%;
  bottom: 5%;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: #393a6e70;
  padding: 0.75rem;
  border-radius: 20px;

  @media only screen and (max-width: 430px) {
    left: 30%;
  }
`;

export const Dot = styled.div`
  width: ${({ active }) => (active ? "3rem" : "0.7rem")};
  height: 0.7rem;
  border-radius: 20px;
  background: #fff;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
  }
`;
