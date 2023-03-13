import * as Yup from 'yup';


export const LoginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).max(16).required(),
  rememberMe: Yup.boolean().default(false),
});

export const CaptchaSchema = Yup.object().shape({
  captcha: Yup.string().required(' required'),
});