import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InlineCommentThreadContainer from "./InlineCommentThreadContainer";
import { Popover, Position } from "@blueprintjs/core";
import { get } from "lodash";
import { commentThreadsSelector } from "./selectors";

const CommentTriggerContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

const InlineCommentPin = ({ commentThreadId }: { commentThreadId: string }) => {
  const commentThread = useSelector(commentThreadsSelector(commentThreadId));
  const { top, left } = get(commentThread, "meta.position", {
    top: 0,
    left: 0,
  });

  return (
    <CommentTriggerContainer
      top={top}
      left={left}
      onClick={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Popover
        minimal
        position={Position.BOTTOM_RIGHT}
        boundary="viewport"
        onClosing={() => {
          // dispatch remove unpublished
        }}
      >
        <div>Comment Icon</div>
        <InlineCommentThreadContainer commentThread={commentThread} />
      </Popover>
    </CommentTriggerContainer>
  );
};

export default InlineCommentPin;
