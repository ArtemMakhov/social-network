import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from "./users-reduser";
import authReduser from './auth-raduser';
import thunkMiddleware from 'redux-thunk';
import appReduser from "./app-reduser";


let redusers = combineReducers({

    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,  
    app: appReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;