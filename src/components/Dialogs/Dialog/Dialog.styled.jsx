import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Contact = styled(NavLink)`
  
  text-decoration: none;
  color: black;

  &.active{
    color: #e2df2b;
  }
`
