import React from 'react';

function Comment({ comment }) {
  return <h1>{comment && comment.content}</h1>
}

export default Comment;