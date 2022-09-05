import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 549px;
  height: 216px;
  background-color: #F9F9F9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

export const CardText = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-weight: 700;
  margin-right: 26px;
  margin-left: 30px;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-top: 30px;
  color: #343587;
`

export const Description = styled.p`
  margin-top: 41px;
  font-size: 16px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 216px;
  height: 216px;
  border-radius: 0 8px 8px 0;
`