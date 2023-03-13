import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: h;
  background-color: ${p => p.theme.colors.primary};
  padding-left: 15px;
  padding-right: 15px;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; 
`

export const LoginBlock = styled.div`
  /* float: right; */
`

export const Login = styled(NavLink)`
  color: white;
`