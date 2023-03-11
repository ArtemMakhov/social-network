import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-raduser";
import LoginForm from "./LoginForm";

const Login = (props) => {
  
    const handleSubmit = (values, {resetForm, setStatus}) => {
      props.login(values.email, values.password, values.rememberMe,values.captcha, setStatus)
    resetForm();
  }

  if (props.isAuth) {
    return <Navigate to='/profile'/>
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm handleSubmit={handleSubmit} captchaUrl={props.captchaUrl } />
    </>
  );
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);