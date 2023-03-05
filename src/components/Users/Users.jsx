import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';


export const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users,...props }) => {
    return (
        <div>
            <Paginator
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
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