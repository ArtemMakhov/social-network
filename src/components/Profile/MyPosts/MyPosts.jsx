import Post from './Post/Post';
import { Title,Button } from './MyPosts.styled';

const MyPosts = ({posts}) => {

    let userPost = posts.map(post => <Post avatar={post.avatar} message={post.message} like={post.like} />)
    return (
        <div >
            <Title>My post</Title>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <Button>Add post</Button>
            </div>
            <ul >
 
                {userPost}

            </ul>
        </div>
    )
};

export default MyPosts;