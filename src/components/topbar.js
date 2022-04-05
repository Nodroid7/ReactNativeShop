import React, {Component} from 'react'
import {View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'

import {em} from '../config/uivar'

const topBarStyles = StyleSheet.create({
	topContainer:{ position:'absolute', top:0 ,height: 207*em, backgroundColor: 'white'},
	topBar: {paddingLeft: 20*em, paddingRight: 20*em, paddingTop: 17*em, paddingBottom: 15*em},
	topImg: {width: 640*em, height: 124*em},
	buttons: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20*em},
	backImg: {width: 20*em, height: 39*em},
	searchContainer: {borderRadius: 22*em, height: 44*em, paddingLeft: 15*em, paddingRight: 15*em, flexDirection: 'row', backgroundColor: 'rgb(210, 182, 185)', alignItems: 'center'},
	searchImg: {width: 18*em, height: 18*em},
	searchText: { fontSize: 18*em, color: 'white', paddingLeft: 10*em},
});
export class TopBarWithSearch extends Component {
	render() {
		const { titleText, searchText } = this.props;
		return(
			<View style={topBarStyles.topContainer}>
				<ImageBackground source={require('../images/Service/top_back.png')} style={topBarStyles.topImg}>
					<View style={topBarStyles.topBar}>
						<View style={topBarStyles.buttons}>
							<TouchableOpacity onPress={this.props.onBack}>
								<Image source={require('../images/Service/back.png')} style={topBarStyles.backImg}/>
							</TouchableOpacity>
							<TouchableOpacity style={topBarStyles.searchContainer} onPress={this.props.onSearch}>
								<Image source={require('../images/Service/search-icon.png')} style={topBarStyles.searchImg}/>
								<Text style={topBarStyles.searchText}>{searchText}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		)
	}
}