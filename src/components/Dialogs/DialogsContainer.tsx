import { actions } from '../../redux/dialogs-reduser';
import { compose } from 'redux';
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

let mapStateToProps = (state: AppStateType) => { 
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{...actions}),
   withAuthRedirect 
)(Dialogs);



