import React from "react";
import styled from "styled-components";
import { Comment } from "reducers/uiReducers/commentsReducer";

const StyledCommentBodyContainer = styled.div``;

const InlineComment = ({ comment }: { comment: Comment }) => {
  return (
    <StyledCommentBodyContainer>{`Comment body: ${comment.body}`}</StyledCommentBodyContainer>
  );
};

export default InlineComment;
