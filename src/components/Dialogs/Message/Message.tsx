import { MessageItem } from './Message.styled';

type PropsType = {
    message: string
}

export const Message: React.FC<PropsType> = ({ message }) => {
    return (
        <MessageItem>{message}</MessageItem>
    )
};