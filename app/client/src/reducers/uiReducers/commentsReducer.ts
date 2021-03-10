import { ReduxAction, ReduxActionTypes } from "constants/ReduxActionConstants";
import { createReducer } from "utils/AppsmithUtils";

// export enum CommentThreadParentTypes {
//   widget = "widget",
//   action = "action",
//   datasource = "datasource",
// }

// ref ui sections within a parent
// enum CommentRefChild {
//   body = "body",
//   header = "header",
// }

type CommentThreadMetadata = {
  tabId: string;
  // refChild: CommentRefChild;
  position: { top: number; left: number }; // percentage
};

type Comment = { body: string };

export type CommentThread = {
  // parentType: CommentThreadParentTypes;
  meta: Partial<CommentThreadMetadata>;
  refId: string; // could be an id to refer any parent based on parent type
  body?: string;
  id: string;
  comments: Array<Comment>;
};

const initialState: CommentsReduxState = {
  commentThreadsMap: {},
  refCommentThreads: {},
  unpublishedCommentThreads: {},
  isCommentMode: true,
};

const commentsReducer = createReducer(initialState, {
  [ReduxActionTypes.SET_COMMENT_THREADS_SUCCESS]: (
    state: CommentsReduxState,
    action: ReduxAction<any>,
  ) => ({
    ...state,
    ...action.payload,
  }),
  [ReduxActionTypes.CREATE_UNPUBLISHED_COMMENT_THREAD_SUCCESS]: (
    state: CommentsReduxState,
    action: ReduxAction<any>,
  ) => ({
    ...state,
    unpublishedCommentThreads: action.payload,
  }),
  [ReduxActionTypes.REMOVE_UNPUBLISHED_COMMENT_THREAD_REQUEST]: (
    state: CommentsReduxState,
  ) => ({
    ...state,
    unpublishedCommentThreads: {},
  }),
});

export interface CommentsReduxState {
  commentThreadsMap: Record<string, CommentThread>;
  refCommentThreads: Record<string, Array<string>>;
  unpublishedCommentThreads: Record<string, CommentThread>;
  isCommentMode: boolean;
}

export default commentsReducer;
