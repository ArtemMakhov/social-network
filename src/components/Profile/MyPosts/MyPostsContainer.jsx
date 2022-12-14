import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reduser';

import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
    
                const onPostChange = (text) => {
                    const action = updateNewPostActionCreator(text)
                    store.dispatch(action);
                };


                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }

        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;