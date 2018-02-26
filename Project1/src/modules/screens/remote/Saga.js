import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {get, post} from '../../../utils/fetchApi';
import {testRemoteSuccess, testRemoteFail, Actions} from './State';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* testRemoteAction() {
	try {
		const data = yield call(get, 'https://jsonplaceholder.typicode.com/posts/1');

		yield put({type: Actions.TEST_REMOTE_SUCCESS, payload: data});
	} catch (e) {
		yield put({type: Actions.TEST_REMOTE_FAIL, payload: e.message});
	}
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* testRemote() {
	yield takeLatest(Actions.TEST_REMOTE, testRemoteAction);
}

export default [testRemote];
