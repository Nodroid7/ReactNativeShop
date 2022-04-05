import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class TabBar extends Component {
	render () {
		const { tabs, chosenButton } = this.props;
		return (
			<View>
				<View style={{
					height: 80 * em, backgroundColor: '#ffffff',
					borderTopColor: '#dfdfdf', flexDirection: 'row',
				}}>
					{tabs.map((item, index) => {
						return (
							<View key={index} style={{justifyContent: 'center', alignItems: 'center', flex: 1, }}>
								{(chosenButton === index) ? (
									<TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
										<View style={{borderBottomWidth:3*em, borderBottomColor:'rgb(255, 202, 76)', width: 300*em, height:80*em, justifyContent: 'center', alignItems: 'center'}}>
											<Text style={{color: '#000', fontSize: 19 * em}}>{item.label}</Text>
										</View>
									</TouchableOpacity>
								) : (
									<TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
										<View style={{width: 300*em, height:80*em, justifyContent: 'center', alignItems: 'center'}}>
											<Text style={{color: '#999999', fontSize: 19 * em}}>{item.label}</Text>
										</View>
									</TouchableOpacity>
								)}
							</View>
						)
					})}
				
				</View>
				{tabs.map((item, index) => {
					return (
						<View key={index}>
							{(chosenButton === index )? item.screen : null}
						</View>
					)
				})}
			</View>
		)
	}
}
