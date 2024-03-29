import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import Profile from './Profile';
import { getUserProfile, getStatus,updateStatus,savePhoto , saveProfile} from '../../redux/profile-reduser';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';   


export function withRouter(Children) {
       return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }
 
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    } 
  }

  render() {
       return (
         <Profile
           {...this.props}
           isOwner={!this.props.match.params.userId}
           profile={this.props.profile}
           status={this.props.status}
           updateStatus={this.props.updateStatus}
           savePhoto={this.props.savePhoto}
         />
    )
  }
 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect (mapStateToProps,{getUserProfile, getStatus,updateStatus , savePhoto,saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
