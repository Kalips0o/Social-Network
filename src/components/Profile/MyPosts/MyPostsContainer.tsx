
import {connect} from "react-redux";

import {DispatchPropsType, MapPropsType, MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

import {actions} from "../../../redux/profile-reducer";




const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}


export const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);
