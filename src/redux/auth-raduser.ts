import { ResultCodeForCaptcha } from './../api/api';
import { ThunkAction } from "redux-thunk";
import { authAPI, ResultCodesEnum, securityAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReduser = (state = initialState, action: ActionsTypes): InitialStateType => {
     
  switch (action.type) {

    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
          
    default: return state;
  }

};

type ActionsTypes = setAuthUserDataActionType | getCaptchaUrlSuccessActionType

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: setAuthUserDataActionPayloadType
}
type setAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};

export const setAuthUserData = (userId: number | null, email: string | null, login :string | null, isAuth:boolean):setAuthUserDataActionType => (
  { type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

type getCaptchaUrlSuccessActionType = {
  type:typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl:string }
  }
export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessActionType => (
  { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });
  
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
  
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
   
  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email:string, password:string, rememberMe:boolean,captcha:any, setStatus:any): ThunkType => async (dispatch) => {
  const loginData = await authAPI.login(email, password, rememberMe,captcha);
   
  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) { 
dispatch(getCaptchaUrl())
  }
    setStatus(loginData.messages);
    alert(loginData.messages);
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
   
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
    
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;