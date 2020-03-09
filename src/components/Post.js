import React from "react";

import Comment from "./Comment";

function Post({ post }) {
  return (
    <>
      <p>{(post && post.author) && post.author.name}</p>
      {post && post.comments.map(comment => <Comment comment={comment} />)}
    </>
  );
}

export default Post;
