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
                <Post message="Hi, how are you?" like="20"/>
                <Post message="It's my first post" like="12"/>

            </div>
        </div>
    )
};

export default MyPosts;