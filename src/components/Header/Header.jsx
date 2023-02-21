import { HeaderWrapper,Logo,LoginBlock,Login } from "./Header.styled";


const Header = (props) => {
    return (
      <HeaderWrapper>
        <Logo src='https://www.svgrepo.com/show/102959/baidu-logo.svg' alt="logo" />
        <LoginBlock>
          {props.isAuth
            ? <div>{ props.login} - <button onClick={props.logout}>Log out</button></div>
            : <Login to={'/login'}>Login</Login>}
        </LoginBlock>
      </HeaderWrapper>
    )
}

export default Header;