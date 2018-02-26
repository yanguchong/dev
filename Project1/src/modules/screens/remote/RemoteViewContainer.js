import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import RemoteView from './RemoteView';
import * as Actions from "./State";

export default connect(
	null,
	dispatch => {
		return {
			navigate: bindActionCreators(NavigationActions.navigate, dispatch),
			remoteActions: bindActionCreators(Actions, dispatch)
		};
	}
)(RemoteView);
