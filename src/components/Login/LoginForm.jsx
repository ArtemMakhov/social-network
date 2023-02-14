import { useFormik } from "formik";


const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: props.onSubmit,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="login"
          name="login"
          type='text'
          onChange={formik.handleChange}
          value={formik.values.login}
          placeholder="Login" />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password" />
      </div>
      <div>
        <input
          id="rememberMe"
          name="rememberMe"
          type={'checkbox'}
          onChange={formik.handleChange}
          value={formik.values.rememberMe}
        />
        remember me
      </div>
      <div>
        <button type="submit">SIGN UP</button>
      </div>
    </form>
  )
};


export default LoginForm;