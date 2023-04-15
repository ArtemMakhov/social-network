import { PostType, ProfileType, PhotosType } from './../types/types';
import { profileAPI } from '../api/profile-api';
import { BaseThunckType, InferActionsTypes } from './redux-store';


const initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", like: 20 },
        { id: 2, message: "It's my first post", like: 12 },
        { id: 3, message: "Hi!", like: 8 },
        { id: 4, message: "How are you?", like: 23 },

    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText:''
};

const profileReduser = (state = initialState, action:ActionsType):InitialStateType => {
     
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST':
            
            let newPost = {
                id: Math.random(),
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile:{...state.profile, photos: action.photos} as ProfileType
            }


        default: return state;
    }

};

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const)
}    


export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId:number): ThunkType => async (dispatch) => {
    const responce = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(responce.data));
}

export const updateStatus = (status:string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile:ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
    actions.setStatus(data.messages[0]);
    alert(data.messages);
  }
}


export default profileReduser;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunckType<ActionsType>