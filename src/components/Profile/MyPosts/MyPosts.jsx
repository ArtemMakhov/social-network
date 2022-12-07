import React from 'react';
import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = ({posts}) => {

    let userPost = posts.map(post => <Post avatar={post.avatar} message={post.message} like={post.like} />)

    const newPostElement = React.createRef();
    const addPost = () => { 
        let text = newPostElement.current.value;
        alert(text)
     };

    return (
        <div >
            <Title>My post</Title>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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