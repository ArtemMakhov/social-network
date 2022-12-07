import React from "react";
import { Wrapper } from "./Dialogs.styled";
import { Dialog } from './Dialog/Dialog';
import { Message } from "./Message/Message";


const Dialogs = ({ state }) => {

    let userDialogs = state.dialogs.map(dialog => <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id} />);
    let userMessages = state.messages.map(message => <Message message={message.message} />);
    
    const newMassagePost = React.createRef();
    const newMassage = () => {
        let massage = newMassagePost.current.value;
        alert(massage)
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
                <div><textarea ref={newMassagePost}></textarea></div>
            
           
                <button onClick={newMassage} >massage</button>
            </div>
           
           
        </Wrapper>
    )
};

export default Dialogs;



