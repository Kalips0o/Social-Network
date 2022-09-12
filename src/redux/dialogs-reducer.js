const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let InitialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {
            id: 1,
            sender: "Me",
            message: "Hi!",
            messageTime: "12:05"
        },

        {
            id: 2,
            sender: "User",
            message: 'Hi! How are you?',
            messageTime: "12:10"
        },

        {
            id: 3,
            sender: "Me",
            message: "Fine, studying in IT-Incubator now. And how are you?",
            messageTime: "12:20"
        },

    ]
};

const dialogsReducer = (state = InitialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;

    }

}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;