import React from "react";

import "./Comment.css";

function Comment({ comment }) {
  return (
    <div className="comment-container">
      <div className="avatar">
        <img
          src={comment && comment.author && comment.author.avatar}
          alt="user avatar"
        />
      </div>
      <div className="comment-content">
        <p>
          <strong>{comment && comment.author.name}</strong>{" "}
          {comment && comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
