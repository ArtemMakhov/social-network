import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    requestUsers,
    FilterType
} from '../../redux/users-reduser';
import { Users } from './Users';
import { Loader } from '../common/Loader/Loader';
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersFilter
} from '../../redux/selectors/users-selector';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number> 
    filter: FilterType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number)=> void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void  
}
type OwnPropsType = {
    pageTitle: string  
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType>{

    componentDidMount() {
        const { currentPage, pageSize, getUsers , filter} = this.props;
        getUsers(currentPage, pageSize,filter);
    };

    onPageChanged = (pageNumber: number) => {
        const { pageSize, getUsers, filter } = this.props;
        getUsers(pageNumber, pageSize,filter);
    };

    onFilterChanged = (filter: FilterType) => {
        const {  pageSize, getUsers } = this.props;
        getUsers(1, pageSize, filter);
    }
    

    render() {

        const {
            pageTitle,
            isFetching,
            totalUsersCount,
            currentPage,
            pageSize,
            users,
            followingInProgress,
            follow,
            unfollow
        } = this.props;
        
        return (
            <>
                <h2>{pageTitle}</h2>
                {isFetching ? <Loader /> : null}
                <Users
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                    users={users}
                    follow={follow}
                    unfollow={unfollow} 
                    followingInProgress={followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state),
        
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { follow: follow, unfollow, getUsers: requestUsers })
)(UsersContainer) 




