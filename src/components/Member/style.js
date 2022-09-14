import styled from 'styled-components';

export const Wrapper = styled.a`
    display: inline-block;
    background-color: beige;
    border-radius: 50%;
    width: ${({ width }) => width}rem;
    height: ${({ width }) => width}rem;;
    
    img {
        border-radius: 50%;
        width: 100%;
    }
`

