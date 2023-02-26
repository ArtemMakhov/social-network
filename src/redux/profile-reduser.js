import { nanoid } from 'nanoid';
import { userApi, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        { id: nanoid(), message: "Hi, how are you?", like: 20 },
        { id: nanoid(), message: "It's my first post", like: 12 },
        { id: nanoid(), message: "Hi!", like: 8 },
        { id: nanoid(), message: "How are you?", like: 23 },

    ],
    profile: null,
    status: 'Hi!',
};

const profileReduser = (state = initialState, action) => {
     
    switch (action.type) {
        case ADD_POST:
            
            let newPost = {
                id: nanoid(),
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }


        default: return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => { 
    userApi.getProfile(userId).then(responce => {
        dispatch(setUserProfile(responce.data))  
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(responce => {
        dispatch(setStatus(responce.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(responce => {
        if (responce.data.resultCode === 0) {
            dispatch(setStatus(responce.data));
        }
    });
}


export default profileReduser;