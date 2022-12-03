
import { Item, Img } from './Post.styled';

const Post = ({message,like,avatar}) => {
    return (
        <Item >
            <Img src={avatar} alt='avatar' width="50" height="50" />
            {message}
            <div>
                <span>Like :</span> {like}
            </div>
        </Item>
    )
};

export default Post;