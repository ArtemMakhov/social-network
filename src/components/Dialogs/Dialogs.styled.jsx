import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`

export const Contact = styled(NavLink)`
  
  text-decoration: none;
  color: black;
  /* &.active{
    color: #e2df2b;
  } */
`

export const MessageItem = styled.div`
    padding:10px ; 
`
