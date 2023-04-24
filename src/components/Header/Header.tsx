import { HeaderWrapper,Logo,LoginBlock,Login } from "./Header.styled";

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logout: () => void
}

const Header:React.FC<MapPropsType & DispatchPropsType> = ({isAuth,login,logout}) => {
    return (
      <HeaderWrapper>
        <Logo src='https://www.svgrepo.com/show/507152/annotation.svg' alt="logo" />
        <LoginBlock>
          {isAuth
            ? <div>{ login} - <button onClick={logout}>Log out</button></div>
            : <Login to={'/login'}>Login</Login>}
        </LoginBlock>
      </HeaderWrapper>
    )
}

export default Header;