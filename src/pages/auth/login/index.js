import React, {Component} from 'react';
import {View, Text} from 'react-native';


class Scene extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};
	render(){
		return(
			<View>
				<Text>Login Page</Text>
			</View>
		)
	}
}
export default Scene;