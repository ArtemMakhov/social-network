import { nanoid } from 'nanoid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: nanoid(), message: "Hi, how are you?", like: 20 },
        { id: nanoid(), message: "It's my first post", like: 12 },
        { id: nanoid(), message: "Hi!", like: 8 },
        { id: nanoid(), message: "How are you?", like: 23 },

    ],
    newPostText: 'it-camasutra.com'
};

const profileReduser = (state = initialState, action) => {
     
    switch (action.type) {
        case ADD_POST: {
            
            let newPost = {
                id: nanoid(),
                message: state.newPostText,
                like: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default: return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReduser;