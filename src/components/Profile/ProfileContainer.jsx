import React from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reduser';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';   
export function withRouter(Children) {
       return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 27480;
    }
 
    this.props.getUserProfile(userId);
    }

  render() {
       return (
         <Profile {...this.props} />
    )
  }
 
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect (mapStateToProps,{getUserProfile })(WithUrlDataContainerComponent);