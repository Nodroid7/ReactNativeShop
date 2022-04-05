import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {em} from '../config/uivar'
const priceStyles = StyleSheet.create({
	container: {flexDirection: 'row'},
	money: {fontSize: 20*em, color: 'rgb(253, 140, 73)', paddingRight: 10*em},
	unit: {fontSize: 10*em, color: 'rgb(253, 140, 73)'}
});
export class Price extends Component {
	render(){
		const { price } = this.props;
		return(
			<View style={priceStyles.container}>
				<View style={{paddingTop: 10*em}}>
					<Text style={priceStyles.unit}>yuan</Text>
				</View>
				<Text style={priceStyles.money}>{ price }</Text>
			</View>
		)
	}
}