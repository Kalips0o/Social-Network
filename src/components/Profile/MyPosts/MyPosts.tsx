import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostForm} from "../../Common/FormsControl/PostForm";
import {PostType} from "../../../types/types";
import React from "react";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}


export const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    return (
        <div className={s.postsBlock}>
            <PostForm onSubmit={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
