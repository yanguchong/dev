import {Map} from 'immutable';

// Initial state
const initialState = Map({
	value: '',
	loading: false,
	hasErrored: false
});

// Actions
export const Actions = {
	TEST_REMOTE: 'Remote/TEST_REMOTE',
	TEST_REMOTE_SUCCESS: 'Remote/TEST_REMOTE_SUCCESS',
	TEST_REMOTE_FAIL: 'Remote/TEST_REMOTE_FAIL'
};

// Action creators
export function testRemote() {
	return {type: Actions.TEST_REMOTE};
}

export function testRemoteSuccess(value) {
	return {
		type: Actions.TEST_REMOTE_SUCCESS,
		payload: value
	};
}

export function testRemoteFail(value) {
	return {
		type: Actions.TEST_REMOTE_FAIL,
		payload: value
	};
}

// Reducer
export default function Reducer(state = initialState, action = {}) {
	switch (action.type) {
		case Actions.TEST_REMOTE:
			return state.set('loading', true);
		case Actions.TEST_REMOTE_SUCCESS:
			return state.merge({
				'loading': false,
				'value': action.payload,
				'hasErrored': false
			});
		case Actions.TEST_REMOTE_FAIL:
			return state.merge({
				'loading': false,
				'value': action.payload,
				'hasErrored': true
			});
		default:
			return state;
	}
}
