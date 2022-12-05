import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Contact = styled(NavLink)`
  text-decoration: none;
  color: black;
&:hover{
  color:#1ce0dc;
}

  &.active{
    color: #e2df2b;
  }
`
export const Img = styled.img`
  border-radius: 50%;
`