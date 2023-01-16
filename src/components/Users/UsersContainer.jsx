import React from 'react';
import { connect } from 'react-redux';

import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
} from '../../redux/users-reduser';
import { Users } from './Users';
import { Loader } from '../Loader/Loader';
import { userApi } from '../../api/api';
class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    };

    render() {

        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
}
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        
    }
}


export default connect
    (mapStateToProps,
        {
            setUsers,
            follow,
            unfollow,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleFollowingProgress,
        }
    )(UsersContainer);


