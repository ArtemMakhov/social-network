import React from "react";
import axios from 'axios';
import userPhoto from '../../images/avatar.png';

class Users extends React.Component{
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => this.props.setUsers(responce.data.items));
    }

  render() {
  return (
        <div>
            {this.props.users.map(user =>
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
                                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
}

export default Users;