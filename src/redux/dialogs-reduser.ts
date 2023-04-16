import { InferActionsTypes } from "./redux-store";


type DialogType = {
    id: number
    name: string
    avatar: string
};
type MessageType = {
    id: number
    message:string
}

const initialState = {
    dialogs: [
        { id: Math.random(), name: "Mango", avatar: "https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg", },
        { id: Math.random(), name: "Poli", avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png", },
        { id: Math.random(), name: "Leon", avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png", },
        { id: Math.random(), name: "Nick", avatar: "https://cdn-icons-png.flaticon.com/512/168/168726.png", },
        { id: Math.random(), name: "Samanta", avatar: "https://img.freepik.com/premium-vector/businesswoman-woman-female-icon_24877-11464.jpg", },
    ] as Array<DialogType>,
    messages: [
        { id: Math.random(), message: "Hello!!!" },
        { id: Math.random(), message: "How are you?" },
        { id: Math.random(), message: "What is your name?" },
        { id: Math.random(), message: "Hi!" },
        { id: Math.random(), message: "Yo" },
    ] as Array<MessageType>,
};

const dialogsReduser = (state = initialState, action: ActionsType): InitialStateType => {
   
    switch (action.type) {
        case 'SN/DIALOGS/ADD-MESSAGE':
            let newMessage = {
                id: Math.random(),
                message: action.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default: return state;
    }
}

export const actions = {
addMessage:(newMessageText:string) => ({ type: 'SN/DIALOGS/ADD-MESSAGE',newMessageText } as const)
}

export default dialogsReduser;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>