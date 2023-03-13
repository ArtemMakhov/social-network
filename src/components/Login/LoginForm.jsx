import { Formik, Form, Field } from 'formik';
import { LoginSchema, CaptchaSchema } from '../../utils/form-helpers/form-schema';
import { FormError } from '../../utils/form-helpers/error-message';

const initiaValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginForm = ({handleSubmit,captchaUrl}) => {

  return (
    <Formik
      initialValues={initiaValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
     
      {({ errors, touched, isValid, dirty, status }) => (
        <Form autoComplete='off'>        
          <div>
            {captchaUrl && <img src={captchaUrl} alt={'secure'} />}
            {captchaUrl && <Field
              validate={CaptchaSchema}
              name="captcha"
              type="input"
              placeholder="symbol from image" />}
        </div>
        <div>
          <Field
            name="email"
            type='text'
            placeholder="email" />
          <FormError name='email' />
        </div>
        <div>
          <Field
            name="password"
            type="text"
            placeholder="Password" />
          <FormError name='password' />
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
  )}
    </Formik>
  );
};


export default LoginForm;