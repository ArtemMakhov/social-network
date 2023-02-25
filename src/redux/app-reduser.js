import { getAuthUserData } from './auth-raduser';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



const initialState = {
 initialized: false,
};

const appReduser = (state = initialState, action) => {
     
  switch (action.type) {

    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
       
    default: return state;
  }

};


export const initiaslizedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
 let promise =  dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initiaslizedSuccess());
    });
}



export default appReduser;