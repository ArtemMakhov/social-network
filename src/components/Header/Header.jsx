import { HeaderWrapper,Logo,LoginBlock,Login } from "./Header.styled";


const Header = (props) => {
    return (
      <HeaderWrapper>
        <Logo src='https://www.svgrepo.com/show/102959/baidu-logo.svg' alt="logo" />
        <LoginBlock>
         {props.isAuth ? props.login :  <Login to={'/login'}>Login</Login>}
        </LoginBlock>
      </HeaderWrapper>
    )
}

export default Header;