import React from 'react';
import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';


const MyPosts = (props) => {

    let userPost = props.posts.map(post => <Post  message={post.message} like={post.like} />)

    let newPostElement = React.createRef();
   
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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