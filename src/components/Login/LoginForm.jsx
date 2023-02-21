import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const initiaValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).max(16).required(),
  rememberMe: Yup.boolean().default(false),
});

const ErrorText = styled.p`
  color: blue;
`

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
}

const LoginForm = (props) => {
  // const handleSubmit = (values, {resetForm}) => {
  //   console.log(values);
  //   resetForm();
  // }
  return (
    <Formik initialValues={initiaValues} onSubmit={props.handleSubmit} validationSchema={LoginSchema}>
      <Form autoComplete='off'>
        <div>
          <Field
            name="email"
            type='text'
            placeholder="email" />
          <FormError name='email'/>
        </div>
        <div>
          <Field
            name="password"
            type="text"
            placeholder="Password" />
          <FormError name='password'/>
        </div>
        <div>
          <Field
            name="rememberMe"
            type={'checkbox'}
          />
          remember me
        </div>
        <div>
          <button type="submit">SIGN UP</button>
        </div>
      </Form>
    </Formik>
  );
};


export default LoginForm;