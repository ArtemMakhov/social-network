import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from '../../redux/users-reduser';
import { Users } from './Users';
import { Loader } from '../common/Loader/Loader';
import {getUsers, getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress } from '../../redux/selectors/users-selector';

class UsersContainer extends React.Component{
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    };

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);
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
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
}
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        
    }
}

export default compose(
    connect(mapStateToProps,{follow, unfollow,setCurrentPage,toggleFollowingProgress,getUsers: requestUsers})
)(UsersContainer)




