import {  useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-raduser";
import { AppDispatch, AppStateType } from "../../redux/redux-store";
import LoginForm from "./LoginForm";


export type LoginFormValuesType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

  const dispatch: AppDispatch = useDispatch()
  
  const handleSubmit = (values: LoginFormValuesType,
    //TODO { resetForm, setStatus }
  ) => {
   dispatch(login(values.email, values.password, values.rememberMe, values.captcha)
      // , setStatus
    )
    // resetForm();
  }

  if (isAuth) {
    return <Navigate to='/profile'/>
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm handleSubmit={handleSubmit} captchaUrl={captchaUrl } />
    </>
  );
}
