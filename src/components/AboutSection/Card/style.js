import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
   

    p {
        word-wrap: break-word;
        text-align: center;
    }

    @media screen and (max-width:768px) {
        margin: 2rem;   
    }
`
export const Icon = styled.img`

    height: 6.875rem;
    
`

export const HighlightText = styled.p`
    font-weight: bold;
    font-size: 1.75rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`