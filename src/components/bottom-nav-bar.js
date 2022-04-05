import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class BottomNavBar extends Component {
	render () {
		const { buttons, chosenButton } = this.props;
		return (
			<View style={{
				position: 'absolute', bottom: 0,
				width: W, height: 80 * em, backgroundColor: '#ffffff',
				borderTopColor: '#dfdfdf', borderBottomWidth: 1 * em,
				flexDirection: 'row',
			}}>
				{buttons.map((item, index) => {
					return (
						<TouchableOpacity key={index} onPress={item.action} style={{justifyContent: 'center', alignItems: 'center', flex: 1, borderRightWidth: 1*em, borderRightColor: '#999'}}>
							{
								<View style={{alignItems: 'center', flexDirection: 'row'}}>
									<Image source={item.normalImage} style={{width: 23 * em, height: 23 * em}}/>
									<Text style={{color: '#363636', fontSize: 23 * em}}>{item.label}</Text>
								</View>
							}
						</TouchableOpacity>
					)
				})}
			</View>
		)
	}
}
