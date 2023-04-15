import { ResultCodeForCaptcha } from './../api/api';
import { ResultCodesEnum } from "../api/api";
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import {  BaseThunckType, InferActionsTypes } from "./redux-store";


const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};


const authReduser = (state = initialState, action: ActionsType): InitialStateType => {
     
  switch (action.type) {

    case 'SN/AUTH/SET_USER_DATA':
      case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
          
    default: return state;
  }

};

// type ActionsTypes = setAuthUserDataActionType | getCaptchaUrlSuccessActionType
export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SN/AUTH/SET_USER_DATA', payload: { userId, email, login, isAuth }
  } as const),
  getCaptchaUrlSuccess: (captchaUrl:string)=> (
  { type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } }  as const)
}
  
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
   
  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
  // setStatus: any
): ThunkType => async (dispatch) => {
  const loginData = await authAPI.login(email, password, rememberMe,captcha);
   
  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) { 
dispatch(getCaptchaUrl())
  }
    // setStatus(loginData.messages);
    alert(loginData.messages);
  }
};

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  const captchaUrlData = await securityAPI.getCaptchaUrl()
  const captchaUrl = captchaUrlData.url
   
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = ():ThunkType => async (dispatch) => {
  const logoutData = await authAPI.logout();
    
  if (logoutData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReduser;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunckType<ActionsType>