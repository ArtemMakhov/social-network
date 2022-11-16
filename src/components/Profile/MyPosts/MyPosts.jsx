import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = () => {
    return (
        <div >
            <Title>My post</Title>
            <div>
                <div><textarea></textarea></div>
                <Button>Add post</Button>
            </div>
            <div >
                <Post message="Hi, how are you?" like="20"/>
                <Post message="It's my first post" like="12"/>

            </div>
        </div>
    )
};

export default MyPosts;