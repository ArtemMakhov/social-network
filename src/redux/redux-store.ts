import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from "./users-reduser";
import authReduser from './auth-raduser';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReduser from "./app-reduser";


let rootReduser = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
})

type RootReduserType = typeof rootReduser; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReduserType>

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[])=> infer U} ? U : never

export type BaseThunckType<A extends Action,R=Promise<void>> = ThunkAction<R, AppStateType, unknown,A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;