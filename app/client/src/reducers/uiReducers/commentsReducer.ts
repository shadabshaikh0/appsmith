import { ReduxAction, ReduxActionTypes } from "constants/ReduxActionConstants";
import { createReducer } from "utils/AppsmithUtils";

export enum CommentParentTypes {
  widget = "widget",
  action = "action",
  datasource = "datasource",
}

// ref ui sections within a parent
enum CommentRefChild {
  body = "body",
  header = "header",
}

type CommentMetadata = {
  tabId: string;
  refChild: CommentRefChild;
  position: { top: number; left: number }; // percentage
};

export type Comment = {
  parentType: CommentParentTypes;
  meta: Partial<CommentMetadata>;
  refId: string; // could be an id to refer any parent based on parent type
  body: string;
  id: string;
};

const initialState: CommentsReduxState = {
  commentsMap: {},
  refComments: {},
};

const commentsReducer = createReducer(initialState, {
  [ReduxActionTypes.SET_COMMENTS_SUCCESS]: (
    state: CommentsReduxState,
    action: ReduxAction<any>,
  ) => ({
    ...state,
    ...action.payload,
  }),
});

export interface CommentsReduxState {
  commentsMap: Record<string, Comment>;
  refComments: Record<string, Array<string>>;
}

export default commentsReducer;
