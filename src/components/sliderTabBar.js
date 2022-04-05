import React, {Component} from 'react'
import {View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import {em} from '../config/uivar'

const styles = StyleSheet.create({
	contentContainer: {height: 70*em, backgroundColor: 'white', flexDirection: 'row', paddingTop: 20*em, paddingBottom: 20*em},
	item: {width: 144*em, alignItems: 'center', color: 'black', fontSize: 30*em},
});
export class SliderTabBar extends Component {
	state = {
		selectedIndex: 0
	};
	onClickItem(index) {
        this.props.onClickMainItem(index);
		this.setState({selectedIndex: index});
	}
	constructor() {
		super();
	}
	componentWillMount(): void {
		const {selected} = this.props;
		this.setState({selectedIndex:selected});
	}
	componentDidUpdate(): void {

	}
	onScrollPos = () => {
		if(this.scrollCategory)
			this.scrollCategory.scrollTo({x:this.state.selectedIndex * 80,y:0,animated:true});
	}
	render() {
		const {onClickMainItem, data} = this.props;
		const renderItems = data.map((item, index)=> {
			return (
			<View key={index}>
				<TouchableOpacity style={index===0 ? styles.item : [styles.item, {borderLeftWidth: 1*em, borderColor: '#ccc'}]} onPress={this.onClickItem.bind(this, index)}>
					<Text style={index===this.state.selectedIndex ? {color: 'orange', borderBottomColor: 'orange', borderBottomWidth: 4*em}: {color: 'black'}}>{item.main}</Text>
				</TouchableOpacity>
			</View>
			)
		});

		return(
			<View>
			<ScrollView  ref={(view)=>{this.scrollCategory = view}} onContentSizeChange={this.onScrollPos} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer} >
				{renderItems}
			</ScrollView>
			</View>
		)
	}
}
