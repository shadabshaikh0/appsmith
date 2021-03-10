import React from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

import { CommentThread } from "reducers/uiReducers/commentsReducer";
import AddCommentInput from "./AddCommentInput";

const StyledCommentBodyContainer = styled.div``;

const InlineCommentThreadContainer = ({
  commentThread,
}: {
  commentThread: CommentThread;
}) => {
  const { comments } = commentThread;
  const addComment = (text: string) => {
    console.log(text);
  };

  return (
    <StyledCommentBodyContainer>
      {comments &&
        comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      <AddCommentInput onSave={addComment} />
    </StyledCommentBodyContainer>
  );
};

export default InlineCommentThreadContainer;
