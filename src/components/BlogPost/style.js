import styled from 'styled-components'
import imgSrc from "../../assets/BlogPostComponentImage.png"

export const BlogPostCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    max-width: 24rem;
    height: 19rem;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;
`

export const CardImage = styled.img`
    background: url(${imgSrc});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
    box-shadow: inset 0px 4px 12px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: inset 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    
`

export const PublishedAt = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: rgba(52, 53, 135, 0.49);
`

export const Title = styled.h3`
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.1em;
    color: #343587;
`

export const Author = styled.p`
    font-size: 14px;
`

export const ReadingTime = styled.p`
    font-size: 14px;
    color: rgba(52, 53, 135, 0.4);
`

export const CardFooter = styled.div`
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: space-between;
`