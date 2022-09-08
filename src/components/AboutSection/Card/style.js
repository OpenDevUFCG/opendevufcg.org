import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;

  p {
    word-wrap: break-word;
    text-align: center;
  }
`;
export const Icon = styled.img`
  max-height: 6rem;

  @media screen and (max-width: 768px) {
    max-height: 5rem;
  }
`;

export const HighlightText = styled.p`
  font-weight: bold;
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
