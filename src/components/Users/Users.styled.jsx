import styled from "styled-components";


export const Selected = styled.span`
cursor: pointer;
font-weight: 900;

:hover{
  color: blue;
}

&.active {
    color: #1ad7d7;
}
`