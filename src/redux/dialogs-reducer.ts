

export type DialogType = {
    id: number
    name: string
};
export type MessageType = {
    id: number
    sender: string
    messageText: string
    messageTime: string
};
export type DialogsInitStateType = typeof initialState;
export type DialogsActionsType = ReturnType<typeof sendNewMessageAC>;

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {
            id: 1,
            sender: "Me",
            messageText: "Hi!",
            messageTime: "12:05",
        },
        {
            id: 2,
            sender: "User",
            messageText: "Yo! How are you?",
            messageTime: "12:18",
        },
        {
            id: 3,
            sender: "Me",
            messageText: "Fine, studying in IT-Incubator now. And how are you?",
            messageTime: "12:24",
        },
    ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState
// Constants
export const SEND_NEW_MESSAGE = "social-net/dialogs/SEND-NEW-MESSAGE";

// Action Creators
export const sendNewMessageAC = (newMessageText: string) => ({
    type: SEND_NEW_MESSAGE,
    newMessageText,
} as const);

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsInitStateType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                sender: "Me",
                messageText: action.newMessageText,
                messageTime: "14.51"
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
};