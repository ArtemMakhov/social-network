
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";
import DialogsForm from './DialogsForm';
import { InitialStateType } from "../../redux/dialogs-reduser";

type PropsType = {
    dialogPage: InitialStateType
    addMessage: (newMessageText: string)=> void
}
export type NewMessageFormType = {
    message: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogPage;

    let userDialogs = state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} key={dialog.id} id={undefined} />);
    let userMessages = state.messages.map(message => <Message message={message.message} key={ message.id} />);
    
    const onSubmit = (values: NewMessageFormType) => {
        props.addMessage(values.message);
    };

    return (
        
        <Wrapper>

            <div>
                {userDialogs}
            </div>
            <div>
                {userMessages}
            </div>
            
            <div>
                <DialogsForm onSubmit={onSubmit} />
            </div>          
        </Wrapper>
    )
};

export default Dialogs;



