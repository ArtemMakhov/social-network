import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", like: 20 },
        { id: 2, message: "It's my first post", like: 12},

    ];
    return (
        <div >
            <Title>My post</Title>
            <div>
                <div><textarea></textarea></div>
                <Button>Add post</Button>
            </div>
            <div >
                <Post message={postsData[0].message} like={postsData[0].like} />
                <Post message={postsData[1].message} like={postsData[1].like} />

            </div>
        </div>
    )
};

export default MyPosts;