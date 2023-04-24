import { Contact,Img } from './Dialog.styled';
import { Box } from '../../Box';

type ProosType = {
    name: string
    avatar: string
    id: number
}

export const Dialog: React.FC<ProosType> = ({ name, avatar,id }) => {

    return (
        <Box m="10px">
            <Contact to={id}>
                <Img src={avatar} alt="avatar" width="50" height="50" />
                {name}
            </Contact>
        </Box>
    )
};