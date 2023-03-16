import { getAuthUserData } from './auth-raduser';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type initialStateType = {
  initialized: boolean
}

const initialState: initialStateType = {
 initialized: false,
};

const appReduser = (state = initialState, action: any): initialStateType => {
     
  switch (action.type) {

    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
       
    default: return state;
  }

};

type initiaslizedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initiaslizedSuccess = ():initiaslizedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
 let promise =  dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initiaslizedSuccess());
    });
}


export default appReduser;