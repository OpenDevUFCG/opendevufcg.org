import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  width: 549px;
  height: 216px;
  background-color: #F9F9F9;
  color: inherit;
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
`

export const CardText = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 1rem;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 30px;
  color: #343587;
`

export const Description = styled.p`
  margin-top: 41px;
  font-size: 16px;
  letter-spacing: 0.125rem;
`

export const Icon = styled.img`
  width: 13.5rem;
`