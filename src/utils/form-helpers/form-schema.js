import * as Yup from 'yup';


export const LoginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).max(16).required(),
  rememberMe: Yup.boolean().default(false),
  captcha:Yup.string().required(),
});