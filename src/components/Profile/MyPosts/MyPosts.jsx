import React from 'react';
import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';
// import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reduser';




const MyPosts = (props) => {

    const userPost = props.posts.map(post => <Post message={post.message} like={post.like} />);
 
    const onAddPost = () => {
        props.addPost();
    };
    
    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text);
        // const action = updateNewPostActionCreator(text)
        // props.dispatch(action);
    };

    return (
        <div >
            <Title>My post</Title>
   
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <Button onClick={onAddPost}>Add post</Button>
            </div>
            <ul >
 
                {userPost}

            </ul>
        </div>
    )
};

export default MyPosts;