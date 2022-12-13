import { nanoid } from 'nanoid';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: nanoid(), message: "Hi, how are you?", like: 20 },
                { id: nanoid(), message: "It's my first post", like: 12 },
                { id: nanoid(), message: "Hi!", like: 8 },
                { id: nanoid(), message: "How are you?", like: 23 },

            ],
            newPostText: 'it-camasutra.com'
        },
        dialogPage: {
            dialogs: [
                { id: nanoid(), name: "Mango", avatar: "https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg", },
                { id: nanoid(), name: "Poli", avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png", },
                { id: nanoid(), name: "Leon", avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png", },
                { id: nanoid(), name: "Nick", avatar: "https://cdn-icons-png.flaticon.com/512/168/168726.png", },
                { id: nanoid(), name: "Samanta", avatar: "https://img.freepik.com/premium-vector/businesswoman-woman-female-icon_24877-11464.jpg", },
            ],
            messages: [
                { id: nanoid(), message: "Hello!!!" },
                { id: nanoid(), message: "How are you?" },
                { id: nanoid(), message: "What is your name?" },
                { id: nanoid(), message: "Hi!" },
                { id: nanoid(), message: "Yo" },
            ],
            newMessageText: 'qwe'
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State  changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
 
    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};


export default store;