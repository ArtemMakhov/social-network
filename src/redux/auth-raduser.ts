import { authAPI, securityAPI } from "../api/api";

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

const authReduser = (state = initialState, action: any): InitialStateType => {
     
  switch (action.type) {

    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
      return {
        userId245:'qweqwe',
        ...state,
        ...action.payload,
      }
          
    default: return state;
  }

};

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
  
export const getAuthUserData = () => async (dispatch:any) => {
  const responce = await authAPI.me();
    
  if (responce.data.resultCode === 0) {
    const { id, email, login } = responce.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email:string, password:string, rememberMe:boolean,captcha:any, setStatus:any) => async (dispatch:any) => {
  const responce = await authAPI.login(email, password, rememberMe,captcha);
   
  if (responce.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (responce.data.resultCode === 10) { 
dispatch(getCaptchaUrl())
  }
    setStatus(responce.data.messages);
    alert(responce.data.messages);
  }
};

export const getCaptchaUrl = () => async (dispatch:any) => {
  const responce = await securityAPI.getCaptchaUrl();
  const captchaUrl = responce.data.url;
   
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch:any) => {
  const responce = await authAPI.logout();
    
  if (responce.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;