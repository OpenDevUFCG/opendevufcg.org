import styled from "styled-components";

export const SectionTitle = styled.h2`
  display: flex;
  color: #343587;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
