import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class BottomBar extends Component {
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
						<View key={index} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
							{(chosenButton === index) ? (
								<TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
									<Image
										source={item.chosenImage}
										style={{width: 40 * em, height: 40 * em}}
									/>
									<Text style={{color: '#2288ea', fontSize: 19 * em}}>{item.label}</Text>
									{(item.isRead === true) ? (
										<Badge
											badgeStyle={{backgroundColor: '#f25c46'}}
											containerStyle={{position: 'absolute', top: -5 * em, right: -5 * em}}
										/>
									) : null}
								</TouchableOpacity>
							) : (
								<TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
									<Image
										source={item.normalImage}
										style={{width: 40 * em, height: 40 * em}}
									/>
									<Text style={{color: '#999999', fontSize: 19 * em}}>{item.label}</Text>
									{(item.isRead === true) ? (
										<Badge
											badgeStyle={{backgroundColor: '#f25c46'}}
											containerStyle={{position: 'absolute', top: -5 * em, right: -5 * em}}
										/>
									) : null}
								</TouchableOpacity>
							)}
						</View>
					)
				})}
			</View>
		)
	}
}
