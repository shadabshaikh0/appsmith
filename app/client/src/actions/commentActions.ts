import { ReduxActionTypes } from "constants/ReduxActionConstants";
import { COMMENT_EVENTS_CHANNEL } from "constants/CommentConstants";

// todo remove (for dev)
export const setCommentsRequest = () => ({
  type: ReduxActionTypes.SET_COMMENTS_REQUEST,
});

// todo remove (for dev)
export const setCommentsSuccess = (payload: any) => ({
  type: ReduxActionTypes.SET_COMMENTS_SUCCESS,
  payload,
});

// todo remove (for dev)
export const initComments = () => ({
  type: ReduxActionTypes.INIT_COMMENTS,
});

export const commentEvent = (payload: any) => ({
  type: COMMENT_EVENTS_CHANNEL,
  payload,
});
