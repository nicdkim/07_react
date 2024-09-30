import React, { useState } from "react";

function Post({ post, onDelete, onAddComment }) {
  const [comment, setComment] = useState("");

  const handleComment = () => {
    if (comment.trim() !== "") {
      onAddComment(post.id, comment);
      setComment("");
    }
  };

  const comments = Array.isArray(post.comments) ? post.comments : [];

  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>삭제</button>

      <div>
        <textarea
          placeholder="댓글 작성"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button onClick={handleComment}>댓글 달기</button>
        {comments.length > 0 && (
        <ul>
            {comments.map((cmt, index) => (
            <li key={index}>{cmt}</li>
            ))}
        </ul>
        )}
      </div>
    </li>
  );
}

export default Post;