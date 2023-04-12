import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '38219c4f-948f-4b48-99d7-ad1ca264529e' },
  
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
export type ResponseType<D ={}, RC = ResultCodesEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}










        