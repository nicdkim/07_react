import { useState } from "react";

function Post({post, onDelete}) {
    
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(post.comments || []);

    const handleComment = () => {
        if(comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <li>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={()=> onDelete(post.id)}>삭제</button>

            <div>
                <textarea
                placeholder="댓글 작성"
                value={comment}
                onChange={(e)=> setComment(e.target.value)}
                />

                <br/>
                <button onClick={handleComment}>댓글 달기</button>
                <ul>
                    {comments.map((cmt, index) => (
                        <li key={index}>{cmt}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default Post;