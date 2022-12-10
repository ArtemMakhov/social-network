
import { Item, Img } from './Post.styled';

const Post = ({message,like,avatar}) => {
    return (
        <Item >
            <Img src='https://cdn.vox-cdn.com/thumbor/LWlI3ImRc5l27CTiBR7ihrPq6RU=/0x0:1080x718/1400x933/filters:focal(477x288:649x460):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg' alt='avatar' width="50" height="50" />
            {message}
            <div>
                <span>Like :</span> {like}
            </div>
        </Item>
    )
};

export default Post;