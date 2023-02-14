import React from 'react';
import Post from './Post/Post';
import { Title } from './MyPosts.styled';
import PostsForm from './PostsForm';


const MyPosts = (props) => {

    const userPost = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like} />);
 
    const onSubmit = (values) => {
          props.addPost(values.post);
    };
    
    return (
        <div >
            <Title>My post</Title>
   
            <div>
                <PostsForm onSubmit={onSubmit} />
            </div>
            <ul >
 
                {userPost}

            </ul>
        </div>
    )
};

export default MyPosts;