import { ResponseType, ResultCodesEnum } from './../api/api';
import { BaseThunckType, InferActionsTypes } from './redux-store';
import { UserType } from './../types/types';
import { userApi } from "../api/users-api";
import { updateObjectInArray } from "../utils/object-helpers";
import { Dispatch } from 'redux';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,  //array of users id
    filter: {
        term: ''
    }
};

const usersReduser = (state = initialState, action:ActionsTypes):InitialStateType => {
     
    switch (action.type) {

        case 'SN/USERS/SET_USERS': {
            return { ...state, users: action.users };
        }
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SN/USERS/SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
                case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
       
        default: return state;
    }

};

type ActionsTypes = InferActionsTypes<typeof actions>
    
export const actions = {
    setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
    followSuccess: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),
    setFilter: (term: string) => ({ type: 'SN/USERS/SET_FILTER', payload:{term} } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
}    

export const requestUsers = (page: number, pageSize: number,term:string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(term))

        const data = await userApi.getUsers(page, pageSize,term);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: (userId: number)=> Promise<ResponseType>,
    actionCreator: (userId:number)=> ActionsTypes) => {
        dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId:number): ThunkType => {
    return async (dispatch) => {
       await _followUnfollowFlow(dispatch, userId, userApi.unfollow.bind(userApi), actions.followSuccess);
    }
}

export const unfollow = (userId:number): ThunkType => {
    return async (dispatch) => {
       await _followUnfollowFlow(dispatch, userId, userApi.follow.bind(userApi), actions.unfollowSuccess);
    }
}


export default usersReduser;


export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunckType<ActionsTypes>  