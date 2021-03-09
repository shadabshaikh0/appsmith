import React from "react";
import { useSelector } from "react-redux";
import InlineCommentTrigger from "./InlineCommentTrigger";
import { refComments } from "./selectors";

const Comments = ({ refId }: { refId: string }) => {
  const commentsIds = useSelector(refComments(refId));
  return (
    <>
      {commentsIds &&
        commentsIds.map((commentId: any) => (
          <InlineCommentTrigger commentId={commentId} key={commentId} />
        ))}
    </>
  );
};

export default Comments;
