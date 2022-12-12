import React from "react";
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';

const Dialogs = (props) => {

    let userDialogs = props.state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id} />);
    let userMessages = props.state.messages.map(message => <Message message={message.message} />);
    
    
    const newMassage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        const action = updateNewMessageActionCreator(text)
        props.dispatch(action);
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
                        value={props.state.newMessageText} />
                </div>
            
                <button onClick={newMassage} >massage</button>
            </div>
           
           
        </Wrapper>
    )
};

export default Dialogs;



