import axios from 'axios';
import userPhoto from '../../images/avatar.png';
const Users = (props) => {
    const baseUrl = "https://social-network.samuraijs.com/api/1.0/users";

    const getUsers = () => {
            if (props.users.length === 0) {
         axios.get(baseUrl).then(responce =>
            props.setUsers(responce.data.items)
        );
       
}
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null
                                ? user.photos.small
                                : userPhoto}
                                alt="avatar" width="50" height="50"
                            />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
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
    )
}

export default Users;