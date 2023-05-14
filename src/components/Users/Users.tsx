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
import { useSearchParams } from 'react-router-dom';


export const Users: React.FC = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch: AppDispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {
        const result: any = {}
        //@ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = { friend, term }
        
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
        
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)
        
        setSearchParams(urlQuery)
      
        // eslint-disable-next-line
    },[currentPage, filter])
    


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
                // currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(user =>
                <User key={user.id}
                    user={user}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow} />
            )}
        </div>
    );
};

