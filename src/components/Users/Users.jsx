import { NavLink } from 'react-router-dom';
import userPhoto from '../../images/avatar.png';
import { Selected } from './Users.styled';
// import { userApi } from '../../api/api';

export const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <Selected onClick={() => { props.onPageChanged(p) }}>{p}</Selected>
                })}
            </div>
            {props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small !== null
                                    ? user.photos.small
                                    : userPhoto}
                                    alt="avatar" width="50" height="50"
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                       
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};