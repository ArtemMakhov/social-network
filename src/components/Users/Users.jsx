// import { nanoid } from 'nanoid';

const Users = (props) => {

//     if (props.users.length === 0) {
//         props.setUsers(
//             users : [
//         { id: nanoid(), avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
//         { id: nanoid(),avatar:'https://ionicframework.com/docs/img/demos/avatar.svg',followed:true, fullName: 'Artem', status: 'I am student', location: { city: 'Kharkov', country: 'Ukraine' } },
//         { id: nanoid(),avatar:'https://ionicframework.com/docs/img/demos/avatar.svg',followed:false, fullName: 'Evgeniy', status: 'Petuh gamburgskiy', location: { city: 'Toronto', country: 'Canada' } },
//         { id: nanoid(),avatar:'https://ionicframework.com/docs/img/demos/avatar.svg',followed:false, fullName: 'Ruslan', status: 'I am friendly', location: { city: 'Kiev', country: 'Ukraine' } },
//         { id: nanoid(),avatar:'https://ionic framework.com/docs/img/demos/avatar.svg',followed:true, fullName: 'Sveta', status: 'I am a women', location: { city: 'Dnipro', country: 'Ukraine' } },])
// }
    return (
        <div>
            {props.users.map(user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={ user.avatar} alt="avatar"  width="50" height="50"/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users;