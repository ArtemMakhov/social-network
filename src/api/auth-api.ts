import { instance,ResponseType, ResultCodesEnum, ResultCodeForCaptcha } from "./api";


type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
userId: number
resultCode: ResultCodesEnum | ResultCodeForCaptcha
}

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<ResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>('auth/login', { email, password, rememberMe, captcha })
      .then(res => res.data);
  },
  logout() {
    return instance.delete('auth/login').then(res => res.data);
  }
};