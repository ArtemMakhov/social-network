import { combineReducers, createStore } from "redux";
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

let redusers = combineReducers({

    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    sidebar: sidebarReduser
    
});

let store = createStore(redusers);

window.store = store;
export default store;