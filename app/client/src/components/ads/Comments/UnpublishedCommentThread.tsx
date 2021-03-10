import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Popover, Position } from "@blueprintjs/core";
import { get } from "lodash";
import { removeUnpublishedCommentThreads } from "actions/commentActions";
import { createCommentThreadRequest as createCommentThreadAction } from "actions/commentActions";
import AddCommentInput from "./AddCommentInput";

const CommentTriggerContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;

const UnpublishedCommentThread = ({
  commentThread,
  refId,
}: {
  commentThread: any;
  refId: string;
}) => {
  const { top, left } = get(commentThread, "meta.position", {
    top: 0,
    left: 0,
  });
  const dispatch = useDispatch();
  const onClosing = () => {
    dispatch(removeUnpublishedCommentThreads());
  };

  const createCommentThread = (text: string) => {
    dispatch(createCommentThreadAction({ text, refId }));
  };

  return (
    <div
      key={`${top}-${left}`}
      onClick={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <CommentTriggerContainer top={top} left={left}>
        <Popover
          isOpen={true}
          minimal
          position={Position.BOTTOM_RIGHT}
          boundary="viewport"
          onClosing={onClosing}
          captureDismiss
        >
          <div>Comment Icon</div>
          <AddCommentInput onSave={createCommentThread} />
        </Popover>
      </CommentTriggerContainer>
    </div>
  );
};

export default UnpublishedCommentThread;
