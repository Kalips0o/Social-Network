
import {connect} from "react-redux";

import {DispatchPropsType, MapPropsType, MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

import {actions} from "../../../redux/profile-reducer";
import {PostType} from "./Post/Post";
import {Dispatch} from "redux";


export type MyPostPropsType = mapStateToPropsType & DispatchPropsType;

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
        addPost: actions.addPostActionCreator,
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



// export const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
//     addPost: actions.addPostActionCreator
// })(MyPosts);
