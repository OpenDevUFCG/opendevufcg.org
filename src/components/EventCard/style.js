import styled from 'styled-components';

export const Card = styled.div`
border-radius: 8px;
background-color: #F9F9F9;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: row;
`;

export const ImageSide = styled.div`
padding: 8px;
`;

export const EventImage = styled.img`
border-radius: 8px;
border: 2px solid rgba(52, 53, 135, 0.3);
`;

export const InfoSide = styled.div`
padding: 8px;
text-align: ${({ textToRight }) => textToRight ? 'right' : 'left'};
`;

export const Title = styled.h1`
font-family: 'Roboto';
font-weight: 700;
letter-spacing: 0.125em;
color: #393A6E;

font-size: 24px;
line-height: 29px;
`;

export const Date = styled.h2`
font-family: 'Roboto';
font-weight: 700;
letter-spacing: 0.125em;
color: #7E7FC1;

font-size: 16px;
line-height: 47px;
`;

export const DescriptionContainer = styled.div`
text-align: justify;
`

export const Description = styled.span`
font-family: 'Roboto';
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #2A2A2A;
`;
