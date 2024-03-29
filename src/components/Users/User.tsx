import { NavLink } from 'react-router-dom';
import userPhoto from '../../images/avatar.png';
import {  UserType } from '../../types/types';


type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: React.FC<PropsType> = ({ user,followingInProgress,unfollow,follow }) => {
  
    return (
   
                <div >
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
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {            
                                    follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>
           
      
    );
};