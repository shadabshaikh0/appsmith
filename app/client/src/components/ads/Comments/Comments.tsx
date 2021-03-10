import React from "react";
import { useSelector } from "react-redux";
import UnpublishedCommentThread from "./UnpublishedCommentThread";
import InlineCommentPin from "./InlineCommentPin";
import {
  refCommentThreadsSelector,
  unpublishedCommentThreadSelector,
} from "./selectors";

const Comments = ({ refId }: { refId: string }) => {
  const commentsThreadIds = useSelector(refCommentThreadsSelector(refId));
  const unpublishedCommentThread = useSelector(
    unpublishedCommentThreadSelector(refId),
  );
  return (
    <>
      {commentsThreadIds &&
        commentsThreadIds.map((commentsThreadId: any) => (
          <InlineCommentPin
            commentThreadId={commentsThreadId}
            key={commentsThreadId}
          />
        ))}
      {unpublishedCommentThread && (
        <UnpublishedCommentThread
          refId={refId}
          commentThread={unpublishedCommentThread}
        />
      )}
    </>
  );
};

export default Comments;
