import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .25rem;
        color: var(--text-title);
    }
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        display: block;
        margin-top: 2rem;
        font-size: 2rem;
        font-weight: 500;
    }
    div:nth-child(3){
        background: var(--green);
        color: #fff;
    }
    @media screen and (max-width: 720px){
        strong{
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 601px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`