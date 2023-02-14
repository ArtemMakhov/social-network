import React from "react";
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";
import DialogsForm from './DialogsForm';

const Dialogs = (props) => {

    let userDialogs = props.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} key={dialog.id} />);
    let userMessages = props.messages.map(message => <Message message={message.message} key={ message.id} />);
    
    const onSubmit = (values) => {
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



