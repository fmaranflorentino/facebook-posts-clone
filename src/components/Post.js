import React from "react";

import Comment from "./Comment";

import "./Post.css";

function Post({ post }) {
  return (
    <article className="Post">
      <header>
        <div className="avatar">
          <img
            src={post && post.author && post.author.avatar}
            alt="user avatar"
          />
        </div>
        <div className="title">
          <h5>{post && post.author && post.author.name}</h5>
          <p>{post && post.date}</p>
        </div>
      </header>

      <section className="post-content">
        <p>{post && post.content}</p>
      </section>

      {post && post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </article>
  );
}

export default Post;
