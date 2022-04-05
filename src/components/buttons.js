import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

import {W, em, colors, fontSizes} from '../config/uivar'
import {textStyles} from '../config/uistyles'

export class TextButton extends Component {
	render() {
		return (
			<View style={this.props.style}>
				<TouchableOpacity
					onPress={this.props.onPress}
					style={[this.props.textStyle, {padding: 8*em, paddingLeft: 30*em, paddingRight: 30*em, borderRadius: 20*em, borderWidth: 1*em}]}>
					<Text style={[textStyles.default, this.props.textColor]}>
						{this.props.title}
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export class TextWithImageButton extends Component {
    render() {
        return (
			<View style={this.props.style}>
				<TouchableOpacity
					onPress={this.props.onPress}
					style={[this.props.textStyle, {padding: 8*em, paddingLeft: 10*em, flexDirection: 'row', alignItems: 'center'}]}>
					<Text style={[textStyles.default, this.props.textColor]}>
                        {this.props.title}
					</Text>
					<Image source={this.props.image} style={{height: 18*em, width: 18*em, resizeMode: 'contain', marginLeft: 5*em}}/>
				</TouchableOpacity>
			</View>
        )
    }
}

export class PrimaryButton extends Component {
	onPress() {
		if (this.props.disabled) {
			return
		}
		this.props.onPress()
	}
	render() {
		const {disabled} = this.props;
		if (disabled) {
			return (
				<View>			
					<View style={{
						width: '100%', height: em*78,
						backgroundColor: colors.primaryBackground,
						justifyContent: 'center',
						borderRadius: 5*em,
						opacity: 0.7
					}}>
						<Text style={{
							alignSelf:'center',
							color:colors.primaryForeground,
							fontSize: fontSizes.button,
						}}>{this.props.title}</Text>
					</View>
				</View>
			)
		}
		return (
			<View>			
				<TouchableOpacity onPress={this.onPress.bind(this)} style={[{
					width: '100%', height: em*78,
					backgroundColor: '#ffca4c',
					justifyContent: 'center',
					borderRadius: 5*em,
				}, (this.props.disabled)?{opacity: 0.7}:{}]}>
					<Text style={{
						alignSelf:'center',
						color:'#333',
						fontSize: fontSizes.button,
					}}>{this.props.title}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export class SecondaryButton extends Component {
	render() {
		const {title, buttonStyle, inputStyle} = this.props;
		return (
			<View>
				<TouchableOpacity onPress={this.props.onPress}
				style={[{
					width: this.props.width, height:60*em,
					backgroundColor: colors.secondaryBackground,
					justifyContent: 'center',
					paddingLeft: 24*em, paddingRight: 24*em,
					borderRadius: 3, borderColor: colors.primary, borderWidth: 1,
				}, buttonStyle]}>
					<Text style={[{
						alignSelf:'center',
						color:colors.secondaryForeground,
						fontSize: fontSizes.small,
					}, inputStyle]}>{title}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
export class Addbutton extends Component{
	render() {
		return (
			<View style={[{justifyContent:'center',alignItems:'center', marginLeft:10*em,marginTop:20*em, marginRight:40*em, }]}>
				<TouchableOpacity onPress={this.props.onAdd.bind(this)}>
					<Image style={{width:100*em, height:100*em,}} source={require('../images/addbutton.png')} resizeMode="cover"/>
				</TouchableOpacity>
			</View>
		)

	}

}

export class Roundbutton extends Component{
		render() {
			return(
				(this.props.Detail != null) ? (
					<TouchableOpacity onPress={this.props.Detail.bind(this)} style={[{backgroundColor:'rgb(226,226,226)',width:80*em,height:40*em,borderRadius:20*em,borderWidth:1*em,borderColor: 'rgb(136,136,136)',justifyContent:'center', alignItems:'center'},this.props.style]}>
						<Text style={{color:'rgb(136,136,136)',fontSize:20*em}}>{this.props.label}</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={[{backgroundColor:'rgb(226,226,226)',width:80*em,height:40*em,borderRadius:20*em,borderWidth:1*em,borderColor: 'rgb(136,136,136)',justifyContent:'center', alignItems:'center'},this.props.style]}>
						<Text style={{color:'rgb(136,136,136)',fontSize:20*em}}>{this.props.label}</Text>
					</TouchableOpacity>
				)
			)
		}

}

export class Button_Ok_Cancel extends Component{
	render(){
		return(
			<TouchableOpacity style={this.props.style}>
				<Text style={{textAlign:'center',color:'#fff'}}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}