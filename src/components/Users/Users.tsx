import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersSearchForm } from './UsersSearchForm';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import { FilterType, requestUsers } from '../../redux/users-reduser';
import {
    getUsers,
    getTotalUsersCount,
    getCurrentPage,
    getPageSize,
    getUsersFilter,
    getFollowingInProgress
} from '../../redux/selectors/users-selector';
import { AppDispatch } from '../../redux/redux-store';


type PropsType = {}

export const Users: React.FC<PropsType> = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize,filter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    };
    const follow = (userId: number) => {
        dispatch(follow(userId))
    };
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    };

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <Paginator
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(user => <User
                user={user}
                key={user.id}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow} />
             
            )}
        </div>
    );
};

