import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';


const DialogsContainer = (props) => {

    const state = props.store.getState();
    
    
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const messageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        
        <Dialogs
            addMessage={addMessage}
            messageChange={messageChange}
            dialogs={state.dialogPage.dialogs}
            messages={state.dialogPage.messages}
            newMessageText={state.dialogPage.newMessageText}
        />


    )
};

export default DialogsContainer;



