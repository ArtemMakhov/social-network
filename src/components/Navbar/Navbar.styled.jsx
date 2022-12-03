import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigate = styled.nav`
    grid-area: n;
    background-color: rgb(47, 116, 255); 
`
export const NavigateList = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin-left: 10px;

&.active {
    color: #1ad7d7;
}
`