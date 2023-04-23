import MyPosts, { DispatchPropsTYpe, MapPropsType } from './MyPosts';
import { actions } from '../../../redux/profile-reduser';
import { connect } from "react-redux";
import { AppStateType } from '../../../redux/redux-store';



const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};


const MyPostsContainer = connect<MapPropsType,DispatchPropsTYpe,{},AppStateType>(mapStateToProps, {
  addPost: actions.addPostActionCreator
})(MyPosts)

export default MyPostsContainer;