import React, {Component} from 'react'
import {StatusBar, StyleSheet} from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';
import {em} from '../config/uivar'
let navBarStyle = StyleSheet.create({
	container: {backgroundColor: '#1b8ede', paddingTop: 50 * em},
	title: {color: 'white'},
	buttonText: {fontSize: 28*em, color:'white'},
	gobackImage: {width: 20 * em, height: 40 * em}
});
export class TopBar extends Component {
	componentWillMount() {
		StatusBar.setBackgroundColor('transparent');
		StatusBar.setTranslucent(true)
	}

	render() {
		let isRight = false, isLeft = false;
		if(this.props.rightElement)
			isRight = true;
		if(this.props.onBack)
			isLeft = true;
		if(isRight === false && isLeft === false){
			navBarStyle = {...navBarStyle, gobackImage:{width: 0,height:0}};
			return (
				<NaviBar
					title={this.props.title}
					style={navBarStyle}
					navbarHeight={145 * em}
				/>
			)
		}
		else if(isRight === false){
			return (
				<NaviBar
					title={this.props.title}
					onLeft={this.props.onBack.bind(this)}
					style={navBarStyle}
					gobackImage={require('../images/注册_图标_返回.png')}
					navbarHeight={145 * em}
				/>
			)
		}
		return (
			<NaviBar
				title={this.props.title}
				onLeft={this.props.onBack.bind(this)}
				style={navBarStyle}
				rightElement={this.props.rightElement}
				onRight={this.props.onRight.bind(this)}
				gobackImage={require('../images/注册_图标_返回.png')}
				navbarHeight={145 * em}
			/>
		)
	}
}