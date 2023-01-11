import React from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reduser';

export function withRouter(Children) {
       return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => {
                this.props.setUserProfile(responce.data);  
            });
    }

  render() {
       return (
         <Profile {...this.props} />
    )
  }
 
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);