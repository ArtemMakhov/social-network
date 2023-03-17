import { nanoid } from 'nanoid';
import { userApi, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type PostType = {
    id: string
    message: string
    like: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtuber: string
    mainLink:string
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState = {
    posts: [
        { id: nanoid(), message: "Hi, how are you?", like: 20 },
        { id: nanoid(), message: "It's my first post", like: 12 },
        { id: nanoid(), message: "Hi!", like: 8 },
        { id: nanoid(), message: "How are you?", like: 23 },

    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText:''
};

export type InitialStateType = typeof initialState

const profileReduser = (state = initialState, action:any):InitialStateType => {
     
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
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile:{...state.profile, photos: action.photos}
            }


        default: return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos)=> ({type: SAVE_PHOTO_SUCCESS,photos})

export const getUserProfile = (userId) => async (dispatch) => {
    const responce = await userApi.getProfile(userId);
    dispatch(setUserProfile(responce.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const responce = await profileAPI.getStatus(userId);
    dispatch(setStatus(responce.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const responce = await profileAPI.updateStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const responce = await profileAPI.savePhoto(file);
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccess(responce.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const responce = await profileAPI.saveProfile(profile);
    
    if (responce.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
    setStatus(responce.data.messages);
    alert(responce.data.messages);
  }
};


export default profileReduser;