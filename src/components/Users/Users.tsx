import { UserType } from '../../types/types';
import { UsersSearchForm } from './UsersSearchForm';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import { FilterType } from '../../redux/users-reduser';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType)=> void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId:number) => void
    unfollow: (userId: number)=> void
}

export const Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users,...props }) => {
    return (
        <div>
            <UsersSearchForm onFilterChanged={props.onFilterChanged} />
            <Paginator
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(user => <User
                user={user}
                key={user.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow} />
             
            )}
        </div>
    );
};

