import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	View,
} from 'react-native';
import styles from './Styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
class RemoteView extends Component {
	static displayName = 'RemoteView';

	static navigationOptions = {
		title: 'Remote Test',
		tabBarIcon: (props) => (
			<Icon name='color-lens' size={24} color={props.tintColor}/>
		),
		// TODO: move this into global config?
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#39babd'
		}
	};

	static propTypes = {
		navigate: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			background: `rgba(${color()},${color()},${color()}, 1)`
		};
	}

	open = () => {
		this.props.navigate({routeName: 'InfiniteColorStack'});
	};

	testRemote = () => {
		this.props.remoteActions.testRemote();
	};

	render() {
		const buttonText1 = 'Open in Stack Navigator 1';
		const buttonText2 = 'Test Remote';
		return (
			<View style={[styles.container, {backgroundColor: this.state.background}]}>
				<Button color='#ee7f06' title={buttonText1} onPress={this.open}/>
				<Button color='#ee7f06' title={buttonText2} onPress={this.testRemote}/>
			</View>
		);
	}
}

export default RemoteView;
