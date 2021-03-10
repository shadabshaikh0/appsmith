import { CommentThread } from "reducers/uiReducers/commentsReducer";

export const reduceCommentsByRef = (comments: any[]) => {
  return comments.reduce((res, curr) => {
    return {
      commentThreadsMap: {
        ...res.commentThreadsMap,
        [curr.id]: curr,
      },
      refCommentThreads: {
        ...(res.refCommentThreads ? res.refCommentThreads : {}),
        [curr.refId]: [
          ...(res.refCommentThreads && res.refCommentThreads[curr.refId]
            ? res.refCommentThreads[curr.refId]
            : []),
          curr.id,
        ],
      },
    };
  }, {});
};

export const transformPublishedCommentActionPayload = (
  payload: any,
): Record<string, CommentThread> => {
  return {
    [payload.refId]: {
      ...payload,
      meta: {
        position: payload.position,
      },
      id: "UNPUBLISHED",
    },
  };
};
