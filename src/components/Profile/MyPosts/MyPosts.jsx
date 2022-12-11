import React from 'react';
import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';
import {addPostActionCreator,updateNewPostActionCreator} from '../../../redux/state'




const MyPosts = (props) => {

    const userPost = props.posts.map(post => <Post  message={post.message} like={post.like} />)

    const newPostElement = React.createRef();
   
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        const action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

   

    return (
        <div >
            <Title>My post</Title>
   
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={ props.newPostText} />
                </div>
                <Button onClick={addPost}>Add post</Button>
            </div>
            <ul >
 
                {userPost}

            </ul>
        </div>
    )
};

export default MyPosts;