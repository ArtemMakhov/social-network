// import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div >
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div >
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
};

export default MyPosts;