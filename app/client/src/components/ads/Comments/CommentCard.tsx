import React from "react";

const CommentCard = ({ comment }: { comment: any }) => {
  return <div>{comment.body}</div>;
};

export default CommentCard;
