import Users from "./Users";
import { connect } from "react-redux";
import { setUsersActionCreator, followActionCreator, unfollowActionCreator } from "../../redux/users-reduser";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (userId) => {
            dispatch(setUsersActionCreator(userId));
        },
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer
