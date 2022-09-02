import styled from "styled-components";

export const Wrapper = styled.section`
    height: auto;
    width: 90vw;
    margin: 0 auto;
    max-height: 863px;
    background:  linear-gradient(180deg, #4979B7 0%, #3C457B 65.85%, #393A6E 100%), linear-gradient(180deg, #4979B7 0%, #393A6E 100%);
    border-radius: 25px;
    color: #FFFFFF;
 
    & > p {
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (max-width:768px) {
        max-height: none;
    }
`;

export const Title = styled.h2`
    text-align: center;
        font-size: 2.5rem;
        padding: 6rem 0 2.5rem 0;
    text-transform: uppercase;
`
export const CardsContainer = styled.div`
    display: flex;
    max-width: 100%;
    padding: 7.5rem 0;
    justify-content: end;

    @media screen and (max-width:768px) {
        flex-direction: column;
        padding: 1rem;
        margin-top: 1rem;
        align-items: center;
    }
`

export const Card = styled.div`
    width: 100%;
    flex-direction: column;
    padding: 0 3rem;

    p {
        word-wrap: break-word;
        text-align: center;
    }

    & > div {
        display: flex;
        justify-content: center;
        height: 135px;
    }

    @media screen and (max-width:768px) {
        margin-bottom: 2rem;
        
    }
`

export const HighlightText = styled.p`
    font-weight: bold;
    font-size: 1.75rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`