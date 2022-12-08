import  Post  from "./Post/Post";
import { MyPostPropsType } from "./MyPostsContainer";

import s from './MyPosts.module.css'
import {PostForm} from "../../Common/FormsControl/PostForm";

export const MyPosts = (props: MyPostPropsType) => {
    const postsElements = props.posts.map((p, key) =>
        <Post key={key} profile={props.profile} message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <PostForm onSubmit={props.addPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
