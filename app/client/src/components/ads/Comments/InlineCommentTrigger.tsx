import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InlineComment from "./InlineComment";
import { Popover, Position } from "@blueprintjs/core";
import { get } from "lodash";
import { comment as commentSelector } from "./selectors";

const CommentTriggerContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

const InlineCommentTrigger = ({ commentId }: { commentId: string }) => {
  const comment = useSelector(commentSelector(commentId));
  const { top, left } = get(comment, "meta.position", { top: 0, left: 0 });

  return (
    <CommentTriggerContainer top={top} left={left}>
      <Popover minimal position={Position.BOTTOM_RIGHT} boundary="viewport">
        <div>Comment Icon</div>
        <InlineComment comment={comment} />
      </Popover>
    </CommentTriggerContainer>
  );
};

export default InlineCommentTrigger;
