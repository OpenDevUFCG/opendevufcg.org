import styled from 'styled-components';

export const Wrapper = styled.a`
    display: inline-block;
    position: relative;
    background-color: beige;
    border-radius: 50%;
    width: ${({ width }) => width}rem;
    height: ${({ width }) => width}rem;;
    img {
        border-radius: 50%;
        width: 100%;
    }

    &:hover {
        span {
            visibility: visible;
        }
    }
`

export const Tooltip = styled.span`
    visibility: hidden;
    width: 100%;
    background-color: #393A6E;
    color: #fff;
    text-align: center;
    padding: 0.4rem 0.2rem;
    border-radius: 0.3rem;

    position: absolute;
    z-index: 1;
`