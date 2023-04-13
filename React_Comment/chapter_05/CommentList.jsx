import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "권유빈",
        comment: "안녕하세요, 권유빈입니다.",
    },
    {
        name: "김범진",
        comment: "안녕하세요, 김범진입니다.",
    },
    {
        name: "정희망",
        comment: "안녕하세요, 정희망입니다.",
    },
]

function CommentList(props) {
    return(
        <div>
            {comments.map((comments) => {
                return(
                    <Comment name={comments.name} comment={comments.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;