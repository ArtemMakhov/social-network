import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = ({postsData}) => {

    let posts = postsData.map(post => <Post id={post.id} message={post.message} like={post.like} />)
    return (
        <div >
            <Title>My post</Title>
            <div>
                <div><textarea></textarea></div>
                <Button>Add post</Button>
            </div>
            <ul >
 
                {posts}

            </ul>
        </div>
    )
};

export default MyPosts;