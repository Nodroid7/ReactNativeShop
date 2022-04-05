import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ImageBackground, Text, Image, TextInput} from 'react-native'
import {Badge, Input} from 'react-native-elements'
import Picker from 'react-native-picker-xg'
import {W, H, em, colors, fontSizes} from '../config/uivar'
import {linkStyles} from '../components/elements2'
import {formStyles} from '../config/uistyles'
export const twoButtonStyles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 0, left:0,
        width: '100%',
        backgroundColor: '#c5c5c5',
        paddingLeft: em*20, paddingRight: em*20, paddingTop: em*20, paddingBottom: em*30,
        display: 'flex', flexDirection: 'row'
    }
});

export class Next extends Component {

    constructor(props){
        super(props)
    }
    goto() {
        this.props.goto();
    }
    render() {
        return (
            <View>

                <View style={{
                    position: 'absolute',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity onPress={this.goto.bind(this)} style={{marginTop: W*10/720, width: W*50/720, height: W* 80/720}}>
                        <ImageBackground source={require('../images/next.png')} style={{
                            width: W*22/720, height: W*40/720,top: W*15/400
                        }}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


export class Tiny_left extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }


    render() {
        return (
            <View style={{padding:1 * em}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    backgroundColor: '#F5FCFF',
                    borderColor: '#F5FCFF',
                    borderWidth: 10,
                    borderRadius: 30,
                    justifyContent: 'center',
                }}>
                    <Text style={{fontSize:23*em}}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class Tiny_Image extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        var url = this.props.url;
        return (
            <TouchableOpacity style={this.props.style} onPress={this.onPress.bind(this)}>
                  	<Image source={this.props.avatar} style={{width: 33*em, height: 33*em, resizeMode: 'contain'}}></Image>
					<Text style={this.props.textStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export class CheckImage extends Component {
    checkItem(){
        this.props.checkItem();
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.checkItem()}>
                <View style={linkStyles.linkInnerWrapper}>
                    <Text style = {linkStyles.linkTextWrapper}>
                        {this.props.text}
                    </Text>
                    {
                        this.props.checked ?
                            <Image source={require('../images/next.png')} style={{
                                width: em * 40,
                                height: em * 40,
                                position: 'absolute',
                                right: 20 * em,
                                top: 30 * em
                            }}/>:null
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

export class NextButton extends Component{
	render(){
		return (
			<View>
                <TouchableOpacity onPress={()=>this.props.onPress()}>
                    <ImageBackground source={require('../images/next.png')} style={{
						width: 15*em, height: 30*em
					}}/>
                </TouchableOpacity>
            </View>
		)
	}
}

export class SelectField extends Component {
	onChangeField(fieldText, selectIndex, fieldValue) {
		let fieldName = this.props.name;
		this.props.onChangeField(fieldName, fieldValue[0]);
	}
	render() {
		let {value} = this.props
		if (!value) value=this.props.placeholder
		let textStyle = {alignItems: 'flex-start', textAlign: 'left'}
		if (!this.props.value)
			textStyle = {...textStyle, color: '#9a9a9a'}
		if (this.props.rightAligned)
			textStyle = {...textStyle, textAlign: 'right', paddingRight: 50*em}
		return (
            <View style={{backgroundColor: 'white', borderColor: '#ccc', flexDirection: 'row',
						borderBottomWidth: 1, borderTopWidth: 1}}>
                <View  style={{height: 90*em, justifyContent:'center', width:'25%', paddingLeft:20*em}}>
                    <Text style={formStyles.fieldLabel}>
						{this.props.label}
                    </Text>
                </View>
                <View style={{
					flexDirection: 'row',
					alignItems: 'center', justifyContent: 'center',
					width: '75%'
				}}>
                    <Picker data={this.props.data} iconStyle={{display: 'none'}} inputStyle={{borderWidth: 0, width: '100%', marginLeft: 0, marginRight: 0, alignItems: 'flex-start', textAlign: 'left', width: W*0.75, zIndex: 12, backgroundColor: 'transparent'}} textStyle={textStyle} inputValue={value} pickerName={this.props.pickerName?this.props.pickerName:''} onResult={this.onChangeField.bind(this)}/>
                    <Image source={require('../images/next.png')} style={{width: 24*em*0.8, height: 42*em*0.8, position: 'absolute', right: 0*em, top: 30*em, zIndex: 11}}/>
                </View>
            </View>
		)
	}
}


export class CustomFullInputField extends Component {
	onChangeField(fieldValue) {
		let fieldName = this.props.name;
		this.props.onChangeField(fieldName, fieldValue);
	}
	render() {
		const {image} = this.props;
		if (image) {
			return (
				<InputFieldWithImage name={this.props.name} image={this.props.avatar} onChangeField={this.props.onChangeField} placeholder={this.props.placeholder}/>
			)
		}
		return (
			<View style={{borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor: 'white', flexDirection: 'row'
				, paddingLeft: 20*em, paddingRight: 20 * em}}>
				<View  style={{width: '25%', height: em*90, justifyContent: 'center'}}>
					<Text style={formStyles.fieldLabel}>
						{this.props.label}
					</Text>
				</View>
				<TextInput placeholder={this.props.placeholder} onChangeText={this.onChangeField.bind(this)} inputContainerStyle = {{padding: 0, width: '75%', height: em*90}}/>
				<View style={{position: 'absolute', right:20*em, top: -10*em}}>{this.props.children}</View>
			</View>
		)
	}
}

const bottomBarStyles = StyleSheet.create({
	wrapperStyle: { borderTopWidth: 1, borderTopColor: 'rgb(223, 223, 223)', flexDirection: 'row', position:'absolute', bottom: 0, width:'100%', height:100*em, backgroundColor: 'white'},
	containerStyle: {flex:1, justifyContent: 'center', alignItems: 'center'},
	itemStyle: {position: 'relative'}
});
export class BottomBar extends Component {
	state={
		selectedIndex: 0
	};
	goChild = (sIndex) => {
		this.setState({selectedIndex: sIndex});
	};
	render() {
		const value = this.props.value;
		const {selectedIndex} = this.state;
		let listColor = (selectedIndex === 1 ? 'rgb(187, 187, 187)': 'rgb(37, 137,234)');
		let myColor = (selectedIndex === 0 ? 'rgb(187, 187, 187)': 'rgb(37, 137,234)');

		return (
			<View style={{flex:1, position: 'relative'}}>
				{this.props.children[selectedIndex]}
				<View style={bottomBarStyles.wrapperStyle}>
					<TouchableOpacity style = {bottomBarStyles.containerStyle} onPress={()=>this.goChild(0)}>
						<View style = {bottomBarStyles.itemStyle}>
							{
								selectedIndex ? <Image source={require('../images/user.png')} style={{width: 42*em, height: 42*em}}/>
									: <Image source={require('../images/next.png')} style={{width: 42*em, height: 42*em}}/>
							}
							<View style={{paddingTop: 10*em}}>
								<Text style={{color: listColor, fontSize:fontSizes.sx}}>任务</Text>
							</View>
							{
								<Badge value={value} status="error" containerStyle={{top: -10*em, right:-15*em, position: 'absolute'}} textStyle={{fontSize:fontSizes.sx}}/>
							}
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={bottomBarStyles.containerStyle} onPress={()=>this.goChild(1)}>
						<View style = {bottomBarStyles.itemStyle}>
							{
								selectedIndex ? <Image source={require('../images/user.png')} style={{width: 42*em, height: 42*em, top:5*em}}/>
									: <Image source={require('../images/next.png')} style={{width: 42*em, height: 42*em, top:5*em}}/>
							}
							<View style={{paddingTop: 10*em}}>
								<Text style={{color: myColor, fontSize:fontSizes.sx}}>我的</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const verticalFieldStyle = StyleSheet.create({
	labelStyle:{borderTopWidth:1, borderBottomWidth:1, borderColor: 'rgb(229,229,229)', justifyContent: 'center', height: 62*em,
		backgroundColor: 'rgb(245,245,245)', fontSize: 25*em, paddingTop: 10*em, paddingLeft: 30*em, color: 'rgb(102, 102, 102)'},
	inputStyle: {fontSize: 25*em, height:80*em, paddingLeft: 30*em, alignSelf: 'flex-start'},
	containerStyle:{backgroundColor: 'white', paddingLeft: 0, paddingRight:0,
		justifyContent: 'center'},
	inputContainerStyle: {borderBottomWidth: 0}
});
export class VerticalInputField extends Component{
	onChangeField(fieldValue) {
		let fieldName = this.props.name;
		this.props.onChangeField(fieldName, fieldValue);
	}
	render(){
		let multiline = false;
		let inputContainerStyle = null;
		if(this.props.multiline){
			inputContainerStyle = {height: 125*em};
			multiline = true;
		}
		const height = multiline ? 200 : 100;
		return(
			<Input label={this.props.label} labelStyle={verticalFieldStyle.labelStyle} placeholder={this.props.placeholder} onChangeText={this.onChangeField.bind(this)} multiline={multiline}
				   containerStyle={verticalFieldStyle.containerStyle} inputContainerStyle={[verticalFieldStyle.inputContainerStyle, { height: height * em }]} inputStyle={verticalFieldStyle.inputStyle}/>
		)
	}
}