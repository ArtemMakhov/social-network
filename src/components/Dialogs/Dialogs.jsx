import React from "react";
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";
import { addMessageActionCreator,updateNewMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let userDialogs = props.state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id} />);
    let userMessages = props.state.messages.map(message => <Message message={message.message} />);
    
    const newMassagePost = React.createRef();
    
    const newMassage = () => {
        props.dispatch(addMessageActionCreator());    
    }

       const  onMessageChange = () => {
           const text = newMassagePost.current.value;
           const action = updateNewMessageActionCreator(text)
           props.dispatch(action);
    }

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
                    ref={newMassagePost}
                    value={props.state.newMessageText} />
                </div>
            
           
                <button onClick={newMassage} >massage</button>
            </div>
           
           
        </Wrapper>
    )
};

export default Dialogs;



