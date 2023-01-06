import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
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


export default connect
    (mapStateToProps,
        {
            setUsers,
            follow,
            unfollow,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
        }
    )(UsersContainer);


