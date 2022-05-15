import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let oneNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs updateNewMessageBody={oneNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;