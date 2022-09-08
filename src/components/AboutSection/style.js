import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4rem 3rem;
  background: linear-gradient(180deg, #4979b7 0%, #3c457b 65.85%, #393a6e 100%),
    linear-gradient(180deg, #4979b7 0%, #393a6e 100%);
  border-radius: 25px;
  color: #fff;

  & > p {
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.125em;
  }

  @media screen and (max-width: 768px) {
    padding: 4em 1rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.125rem;
`;
export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 7rem;
  align-items: start;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1rem;
    margin: 0;
    margin-top: 1rem;
    align-items: center;
  }
`;
