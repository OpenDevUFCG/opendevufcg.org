import styled from 'styled-components'
import imgSrc from "../../assets/BlogPostComponentImage.png"

export const BlogPostCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 9px;
    gap: 10px;
    width: 451px;
    height: 360px;
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
    height: 182px;
    box-shadow: inset 0px 4px 12px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: inset 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    
`

export const PublishedAt = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: rgba(52, 53, 135, 0.49);
`

export const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #343587;
`

export const Author = styled.p`
    width: fit-content;
    height: 76px;
    left: 9px;
    top: 275px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    text-align: left;
    color: #343587;
`

export const ReadingTime = styled.p`
    width: 170px;
    height: 76px;
    left: 293px;
    top: 275px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: rgba(52, 53, 135, 0.4);
`

export const WrapperAuthorReadingTime = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`