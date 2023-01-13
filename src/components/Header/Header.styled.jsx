import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  grid-area: h;
  background-color: rgba(83, 199, 20, 0.949);

`;


export const Logo = styled.img`
  width: 40px;
  height: 40px;
  
`

export const LoginBlock = styled.div`
  float: right;
`

export const Login = styled(NavLink)`
  color: white;
`