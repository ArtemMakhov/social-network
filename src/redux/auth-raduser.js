import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';



const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReduser = (state = initialState, action) => {
     
  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
       
    default: return state;
  }

};


export const setAuthUserData = (userId, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
  
export const getAuthUserData = () => async (dispatch) => {
  let responce = await authAPI.me();
    
  if (responce.data.resultCode === 0) {
    let { id, email, login } = responce.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
  let responce = await authAPI.login(email, password, rememberMe);
   
  if (responce.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    setStatus(responce.data.messages);
    console.log(responce.data.messages);
  }
};

export const logout = () => async (dispatch) => {
  let responce = await authAPI.logout();
    
  if (responce.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;