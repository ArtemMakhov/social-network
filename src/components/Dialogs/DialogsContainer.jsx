import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';
import { compose } from 'redux';
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => { 
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        messageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    }
};



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
   withAuthRedirect 
)(Dialogs);



