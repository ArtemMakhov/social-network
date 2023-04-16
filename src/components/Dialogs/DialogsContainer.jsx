import { actions } from '../../redux/dialogs-reduser';
import { compose } from 'redux';
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => { 
    return {
        dialogPage: state.dialogPage,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: (newMessageText) => {
//             dispatch(actions.addMessage(newMessageText));
//         },
//     }
// };

export default compose(
    connect(mapStateToProps,{...actions}),
   withAuthRedirect 
)(Dialogs);



