import styled from 'styled-components';

export const Card = styled.div`
border-radius: 8px;
background-color:#F9F9F9;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
width: 29.6vw;
height: 22.2vw;

position: absolute;
left: 100px;

@media screen and (max-width: 1181px) {
  height: 24vw;
}

@media screen and (max-width: 944px) {
  height: 26vw;
}

@media screen and (max-width: 778px) {
  height: 28vw;
}

@media screen and (max-width: 726px) {
  height: 30vw;
}

@media screen and (max-width: 609px) {
  height: 32vw;
}

@media screen and (max-width: 535px) {
  height: 34vw;
}
`;

export const UpperRow = styled.div`
display: flex;
flex-direction: row;
padding: .5%;
`;

export const LowerRow = styled.div`
text-align: justify;
height: 50%;
padding: 0 2.5% 2.5% 2.5%;
`;

export const ImageSide = styled.div`
padding: .4vw;
`;

export const EventImage = styled.img`
border-radius: 8px;
border: 2px solid rgba(52, 53, 135, 0.3);
width: 11.3vw;
height: 11.3vw;
`;

export const InfoSide = styled.div`
padding: .4vw;
`;

export const Title = styled.h1`
font-family: 'Roboto';
font-weight: 700;
letter-spacing: 0.125em;
color: #393A6E;

font-size: 1.3vw;
line-height: 1.6vw;
`;

export const Date = styled.h2`
font-family: 'Roboto';
font-weight: 700;
letter-spacing: 0.125em;
color: #7E7FC1;

font-size: .9vw;
line-height: 1vw;
`;

export const Description = styled.span`
font-family: 'Roboto';
font-weight: 400;
font-size: .9vw;
line-height: 1.27vw;
color: #2A2A2A;
`;
