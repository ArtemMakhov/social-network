import { PostType, ProfileType, PhotosType } from './../types/types';
import { nanoid } from 'nanoid';
import { userApi, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';    
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile:{...state.profile, photos: action.photos} as ProfileType
            }


        default: return state;
    }

};

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId:number
}
export const deletePost = (postId: number):DeletePostActionType => ({ type: DELETE_POST, postId });
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType=> ({type: SAVE_PHOTO_SUCCESS,photos})

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    const responce = await userApi.getProfile(userId);
    dispatch(setUserProfile(responce.data));
};

export const getStatus = (userId:number) => async (dispatch:any) => {
    const responce = await profileAPI.getStatus(userId);
    dispatch(setStatus(responce.data));
};

export const updateStatus = (status:string) => async (dispatch:any) => {
    const responce = await profileAPI.updateStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file:any) => async (dispatch:any) => {
    const responce = await profileAPI.savePhoto(file);
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccess(responce.data.data.photos));
    }
};

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
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