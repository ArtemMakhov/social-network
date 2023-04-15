import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from './auth-raduser';


const initialState = {
 initialized: false,
};

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReduser = (state = initialState, action: ActionsType): initialStateType => {
     
  switch (action.type) {

    case 'SN/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default: return state;
  }
}

export const actions = {
  initiaslizedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = () => (dispatch: any) => {
 let promise =  dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(actions.initiaslizedSuccess())
    });
}


export default appReduser;