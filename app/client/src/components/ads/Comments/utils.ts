export const reduceCommentsByRef = (comments: any[]) => {
  return comments.reduce((res, curr) => {
    return {
      commentsMap: {
        ...res.commentsMap,
        [curr.id]: curr,
      },
      refComments: {
        ...(res.refComments ? res.refComments : {}),
        [curr.refId]: [
          ...(res.refComments && res.refComments[curr.refId]
            ? res.refComments[curr.refId]
            : []),
          curr.id,
        ],
      },
    };
  }, {});
};
