import { Contact,Img } from './Dialog.styled';
import { Box } from '../../Box';

export const Dialog = ({ name, avatar,id }) => {

    return (
        <Box m="10px">
            <Contact to={id}>
                <Img src={avatar} alt="avatar" width="50" height="50" />
                {name}
            </Contact>
        </Box>
    )
};