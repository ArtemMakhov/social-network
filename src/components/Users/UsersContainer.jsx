import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    setUsersActionCreator,
    followActionCreator,
    unfollowActionCreator,
    setCurrentPageAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC
} from '../../redux/users-reduser';
import { Users } from './Users';
import { Loader } from '../Loader/Loader';
class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.data.items)
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
            </>
        )
}
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (user) => {
            dispatch(setUsersActionCreator(user));
        },
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch (setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


