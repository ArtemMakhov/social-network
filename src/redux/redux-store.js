import { combineReducers, createStore } from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from "./users-reduser";
import authReduser from './auth-raduser';

let redusers = combineReducers({

    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    
});

let store = createStore(redusers);


export default store;