import React from "react";
import axios from 'axios';
import userPhoto from '../../images/avatar.png';
import { Selected } from './Users.styled';

class Users extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => this.props.setUsers(responce.data.items));
    }

    render() {
        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
  return (
      <div>
          <div>
              {pages.map(p => {
               return  <Selected onClick={()=> {this.onPageChanged(p)}}>{p}</Selected>
             })}
          </div>
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