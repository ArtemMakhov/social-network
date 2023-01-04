const SET_USERS = "SET_USERS";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [

    ]
}; 

const usersReduser = (state = initialState, action) => {
     
    switch (action.type) {

        case SET_USERS: {
            return { ...state, users: [...state.users,...action.users] };
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            }
       
        default: return state;
    }

};

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW ,userId});

export default usersReduser;