import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { COMMENT_EVENTS_CHANNEL } from "constants/CommentConstants";

// todo remove (for dev)
export const setCommentThreadsRequest = () => ({
  type: ReduxActionTypes.SET_COMMENT_THREADS_REQUEST,
});

// todo remove (for dev)
export const setCommentThreadsSuccess = (payload: any) => ({
  type: ReduxActionTypes.SET_COMMENT_THREADS_SUCCESS,
  payload,
});

// todo remove (for dev)
export const initCommentThreads = () => ({
  type: ReduxActionTypes.INIT_COMMENT_THREADS,
});

export const commentEvent = (payload: any) => ({
  type: COMMENT_EVENTS_CHANNEL,
  payload,
});

export const createUnpublishedCommentThreadRequest = (payload: {
  refId: string;
  position: any;
}) => ({
  type: ReduxActionTypes.CREATE_UNPUBLISHED_COMMENT_THREAD_REQUEST,
  payload,
});

export const createUnpublishedCommentThreadSuccess = (payload: any) => ({
  type: ReduxActionTypes.CREATE_UNPUBLISHED_COMMENT_THREAD_SUCCESS,
  payload,
});

export const removeUnpublishedCommentThreads = () => ({
  type: ReduxActionTypes.REMOVE_UNPUBLISHED_COMMENT_THREAD_REQUEST,
});

export const createCommentThreadRequest = (payload: any) => ({
  type: ReduxActionTypes.CREATE_COMMENT_THREAD_REQUEST,
  payload,
});

export const addCommentToThreadRequest = (payload: any) => ({
  type: ReduxActionTypes.ADD_COMMENT_TO_THREAD_REQUEST,
  payload,
});
