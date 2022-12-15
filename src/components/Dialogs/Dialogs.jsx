import React from "react";
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";


const Dialogs = (props) => {

    let userDialogs = props.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} key={dialog.id} />);
    let userMessages = props.messages.map(message => <Message message={message.message} key={ message.id} />);
    
    
    const newMessage = () => {
        props.addMessage();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.messageChange(text);
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
                <div>
                    <textarea
                        onChange={onMessageChange}
                        value={props.newMessageText} />
                </div>
            
                <button onClick={newMessage} >massage</button>
            </div>
           
           
        </Wrapper>
    )
};

export default Dialogs;



