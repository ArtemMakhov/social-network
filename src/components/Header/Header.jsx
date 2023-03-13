import { HeaderWrapper,Logo,LoginBlock,Login } from "./Header.styled";


const Header = ({isAuth,login,logout}) => {
    return (
      <HeaderWrapper>
        <Logo src='https://www.svgrepo.com/show/507152/annotation.svg' alt="logo" />
        {/* <Logo src='https://www.svgrepo.com/show/102959/baidu-logo.svg' alt="logo" /> */}
        <LoginBlock>
          {isAuth
            ? <div>{ login} - <button onClick={logout}>Log out</button></div>
            : <Login to={'/login'}>Login</Login>}
        </LoginBlock>
      </HeaderWrapper>
    )
}

export default Header;