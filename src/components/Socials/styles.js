import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  align-items: center;
  max-width: 35rem;
  background-color: #F9F9F9;
  color: inherit;
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 18rem;
  }
`

export const CardText = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 1rem;
  order: 2;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 1rem;
  color: #343587;
`

export const Description = styled.p`
  margin: 2rem 0;
  font-size: 16px;
  letter-spacing: 0.125rem;
`

export const Icon = styled.img`
  width: 100%;
  order: 1;
`