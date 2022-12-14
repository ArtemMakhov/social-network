import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();
    
    
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                const messageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                };


                return <Dialogs
                    addMessage={addMessage}
                    messageChange={messageChange}
                    dialogs={state.dialogPage.dialogs}
                    messages={state.dialogPage.messages}
                    newMessageText={state.dialogPage.newMessageText}
                />
            }
        }
        


        </StoreContext.Consumer>
    )
};

export default DialogsContainer;



