import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 1rem 3rem;
    background:  linear-gradient(180deg, #4979B7 0%, #3C457B 65.85%, #393A6E 100%), linear-gradient(180deg, #4979B7 0%, #393A6E 100%);
    border-radius: 25px;
    color: #FFF;
 
    & > p {
        font-size: 1.5rem;
        text-align: center;
    }

    @media screen and (max-width:768px) {
        max-height: none;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
`
export const CardsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 7.5rem 0;


    @media screen and (max-width:768px) {
        flex-direction: column;
        padding: 1rem;
        margin-top: 1rem;
        align-items: center;
    }
`