import { ReduxActionTypes } from "constants/ReduxActionConstants";
import {
  put,
  takeLatest,
  take,
  race,
  all,
  call,
  actionChannel,
  fork,
} from "redux-saga/effects";
import { updateLayout, getTestComments } from "components/ads/Comments/init";
import {
  COMMENT_EVENTS_CHANNEL,
  COMMENT_EVENTS,
} from "constants/CommentConstants";
import handleCommentEvents from "./handleCommentEvents";
import { commentEvent } from "actions/commentActions";

export function* initComments() {
  try {
    yield race([
      take(ReduxActionTypes.INITIALIZE_EDITOR_SUCCESS),
      take(ReduxActionTypes.INITIALIZE_PAGE_VIEWER_SUCCESS),
    ]);
    yield put(updateLayout());
    yield put(
      commentEvent({
        type: COMMENT_EVENTS.SET_COMMENTS,
        payload: getTestComments(),
      }),
    );
  } catch (err) {
    console.log(err, "err");
  }
}

function* watchCommentEvents() {
  const requestChan = yield actionChannel(COMMENT_EVENTS_CHANNEL);
  while (true) {
    const { payload } = yield take(requestChan);
    yield fork(handleCommentEvents, payload);
  }
}

export default function* commentSagas() {
  yield all([
    takeLatest(ReduxActionTypes.INIT_COMMENTS, initComments),
    call(watchCommentEvents),
  ]);
}
