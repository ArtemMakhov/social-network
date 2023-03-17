import { nanoid } from 'nanoid';

const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: string
    name: string
    avatar: string
};
type MessageType = {
    id: string
    message:string
}

const initialState = {
    dialogs: [
        { id: nanoid(), name: "Mango", avatar: "https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg", },
        { id: nanoid(), name: "Poli", avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png", },
        { id: nanoid(), name: "Leon", avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png", },
        { id: nanoid(), name: "Nick", avatar: "https://cdn-icons-png.flaticon.com/512/168/168726.png", },
        { id: nanoid(), name: "Samanta", avatar: "https://img.freepik.com/premium-vector/businesswoman-woman-female-icon_24877-11464.jpg", },
    ] as Array<DialogType>,
    messages: [
        { id: nanoid(), message: "Hello!!!" },
        { id: nanoid(), message: "How are you?" },
        { id: nanoid(), message: "What is your name?" },
        { id: nanoid(), message: "Hi!" },
        { id: nanoid(), message: "Yo" },
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState


const dialogsReduser = (state = initialState, action: any): InitialStateType => {
   
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: nanoid(),
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default: return state;
    }
}

type addMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessageActionCreator = (newMessageText:string):addMessageActionCreatorActionType => ({ type: ADD_MESSAGE,newMessageText });

export default dialogsReduser;