import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", like: 20 },
        { id: 2, message: "It's my first post", like: 12 },

    ];
    let posts = postsData.map(post => <Post message={post.message} like={post.like} />)
    return (
        <div >
            <Title>My post</Title>
            <div>
                <div><textarea></textarea></div>
                <Button>Add post</Button>
            </div>
            <div >
 
                {posts}

            </div>
        </div>
    )
};

export default MyPosts;