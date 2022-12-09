import {Dispatch} from "redux";
import {connect} from "react-redux";

import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";


import {PostType} from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profile-reducer";

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    posts: Array<PostType>
    profile: any
    status?: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}

type mapDispatchToPropsType = {
    addPost: (post: string) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (post: string) => dispatch(addPostActionCreator(post)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);