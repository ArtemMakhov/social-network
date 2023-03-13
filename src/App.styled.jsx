import styled from "styled-components";


export const Wrapper = styled.div`
    display: grid;
    width: 1280px;
    margin: 0 auto;

    grid-template-areas:
    "h h"
    "n c";

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 5px;  
`
export const Content = styled.div`
    grid-area: c;
    background-color: ${p => p.theme.colors.muted};
`
export const Preloader = styled.div`
    text-align: center;
    margin-top: 200px;
`