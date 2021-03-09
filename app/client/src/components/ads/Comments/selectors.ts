import { AppState } from "reducers";

export const refComments = (refId: string) => (state: AppState) =>
  state.ui.comments.refComments[refId];

export const comment = (commentId: string) => (state: AppState) =>
  state.ui.comments.commentsMap[commentId];
