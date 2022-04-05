import React, {Component} from 'react'
import {StyleSheet, TextInput, Text, View, Image, TouchableOpacity} from 'react-native'
import Picker, {CascadePicker} from 'react-native-picker-xg'
import DatePicker from 'react-native-datepicker'

import {em, W, colors, fontSizes} from '../config/uivar'
import {formStyles, fixedFormStyles} from '../config/uistyles'

export class InputField extends Component {
	onChangeField(fieldValue) {
		let fieldName = this.props.name;		
		this.props.onChangeField(fieldName, fieldValue);
	}
	render() {
		const {image} = this.props;
		if (image) {			
			return (
				<InputFieldWithImage name={this.props.name} image={this.props.image} onChangeField={this.props.onChangeField} placeholder={this.props.placeholder} passwordField={this.props.passwordField?true:false}/>
			)
		}
		return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
						{this.props.label}
					</Text>
				</View>
				<TextInput
					placeholder={this.props.placeholder}
					onChangeText={this.onChangeField.bind(this)}
					secureTextEntry={this.props.passwordField?true:false}
					style={[formStyles.fieldText, {borderWidth: 1*em, borderColor: '#666', height: 70*em, borderRadius: 5*em}]}
				/>
			</View>
		)
	}
}

export class InputFieldWithNextAndImage extends Component {
    onChangeField(fieldValue) {
        let fieldName = this.props.name;
        this.props.onChangeField(fieldName, fieldValue);
    }
    render() {
        return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
                        {this.props.label}
					</Text>
				</View>
				<View style={[formStyles.fieldIcon]}>
					<Image source={this.props.image} style={{width: '5%', height: 30*em, resizeMode: 'contain'}}/>
					<Text style={{padding: 15*em, width:'85%'}}>{this.props.text}</Text>
					<View style={{width:'10%', flexDirection: 'row', justifyContent: 'flex-end'}}>
						<TouchableOpacity onPress={this.props.goto}>
							<Image source={require('../images/next.png')} style={{width: 30*em, height: 30*em, resizeMode: 'contain'}}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

class InputFieldWithImage extends Component {
	onChangeField(fieldValue) {
		let fieldName = this.props.name;
		this.props.onChangeField(fieldName, fieldValue);
	}
	render() {
		return (
			<View style={formStyles.formField}>
				<Image source={this.props.image} style={{
					width: 54*em, height: 54*em,
					margin: 18*em,
				}}/>
				<TextInput placeholder={this.props.placeholder} onChangeText={this.onChangeField.bind(this)}
				style={[formStyles.fieldText, {width: 468*em}]} secureTextEntry={this.props.passwordField?true:false}/>
			</View>
		)
	}
}

export class CheckField extends Component {
	render() {
		let checkedImage = require('../images/checkbox_checked.png');
		const {checked} = this.props;
		if (!checked) checkedImage = require('../images/checkbox_unchecked.png');

		return (
			<View>
				<TouchableOpacity onPress={this.props.onChange} 
				style={{flexDirection: 'row'}}>
					<Image source={checkedImage} style={{
						width: 40*em, height: 40*em,
					}}/>
					<View>
						<Text
						stye={{
							color: colors.text, fontSize: fontSizes.default,						
						}}>{this.props.label}</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

export class SelectField extends Component {
  onChangeField(fieldText, selectIndex, fieldValue) {
    let fieldName = this.props.name;
    this.props.onChangeField(fieldName, fieldValue);
  }
  render() {
    let {value} = this.props;
    if (!value) value=this.props.placeholder;
    let textStyle = {alignItems: 'flex-start', textAlign: 'left'};
    if (!this.props.value)
      textStyle = {...textStyle, color: '#9a9a9a'};
    if (this.props.rightAligned)
      textStyle = {...textStyle, textAlign: 'right', paddingRight: 50*em};
    return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
            {this.props.label}
					</Text>
				</View>
				<View style={{
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center',
          width: '75%',
          position: 'relative'
        }}>
					<Picker data={this.props.data} iconStyle={{display: 'none'}} inputStyle={{borderWidth: 0, width: '100%', marginLeft: 0, marginRight: 0, alignItems: 'flex-start', textAlign: 'left', width: W*0.75, zIndex: 12, backgroundColor: 'transparent'}} textStyle={textStyle} inputValue={value} pickerName={this.props.pickerName?this.props.pickerName:''} onResult={this.onChangeField.bind(this)}/>
					<Image source={require('../images/注册_图标_导向.png')} style={{width: 24*em*0.8, height: 42*em*0.8, position: 'absolute', right: 0*em, top: 30*em, zIndex: 11}}/>
				</View>
			</View>
    )
  }
}

export class DateField extends Component {
  onChangeField(fieldValue) {
    let fieldName = this.props.name;
    this.props.onChangeField(fieldName, fieldValue);
  }
  render() {
    return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
            {this.props.label}
					</Text>
				</View>
				<View style={{width: '75%'}}>
					{/*
					<DatePicker placeholder={this.props.placeholder} mode='date' format='YYYY-MM-DD' showIcon={false} style={{width: '100%', }} customStyles={{placeholderText: {textAlign: 'left', width: '100%'}, dateText: {textAlign: 'left', width: '100%'}, dateInput: {borderWidth: 0}}} onDateChange={this.onChangeField.bind(this)} date={this.props.value}/>
					*/}
					<DatePicker placeholder={this.props.placeholder} mode='date' format='YYYY-MM-DD' onDateChange={this.onChangeField.bind(this)} date={this.props.value}/>
				</View>
			</View>
    )
  }
}

export class DateBetweenField extends Component {
  onChangeFromField(fieldValue) {
    let fieldName = this.props.fromName;
    this.props.onChangeField(fieldName, fieldValue);
  }
  onChangeToField(fieldValue) {
    let fieldName = this.props.to_name;
    this.props.onChangeField(fieldName, fieldValue);
  }
  render() {
    return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
            {this.props.label}
					</Text>
				</View>
				<View style={{
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center'
        }}>
					<DatePicker placeholder={this.props.fromPlaceholder} style={{width: 160*em}} mode='date' date={this.props.fromValue} format='YYYY-MM-DD' showIcon={false}
											customStyles={{dateInput: {borderWidth: 0}}} onDateChange={this.onChangeFromField.bind(this)}/>
					<Image source={require('../images/line-horizontal-between.png')} style={{
            marginLeft: 30*em, marginRight: 30*em,
            width: 45*em, height: 15*em,
          }}/>
					<DatePicker placeholder={this.props.toPlaceholder} style={{width: 160*em}} mode='date' date={this.props.toValue} format='YYYY-MM-DD' showIcon={false}
											customStyles={{dateInput: {borderWidth: 0}}} onDateChange={this.onChangeToField.bind(this)}/>
				</View>
			</View>
    )
  }
}

export class TextField extends Component {
  render() {
  	const {label, value, placeholder, onChangeField} = this.props;
		const isEmptyField = !(value&&value!='');
    return (
			<View style={[fixedFormStyles.formField]}>
				<View  style={fixedFormStyles.fieldLabelWrapper}>
					<Text style={fixedFormStyles.fieldLabel}>
            {label}
					</Text>
				</View>
				<View style={fixedFormStyles.fieldTextWrapper}>
          {isEmptyField ?
						<Text style={[fixedFormStyles.fieldPlaceholder, onChangeField?{paddingRight:22*em}:{}]}>{placeholder}</Text>:
						<Text style={[fixedFormStyles.fieldText, onChangeField?{paddingRight:22*em}:{}]}>{value}</Text>
          }
					{onChangeField ?
						<TouchableOpacity style={{position: 'absolute', top: 38*em, right: 0}} onPress={this.onChangeField.bind(this, value)}>
							<Image source={require('../images/注册_图标_导向.png')} style={{width: 16*em, height: 28*em}}/>
						</TouchableOpacity> :
						<View/>
					}
				</View>
			</View>
    )
  }
  onChangeField(fieldValue) {
    let fieldName = this.props.name;
    this.props.onChangeField(fieldName, fieldValue);
  }
}

export class Select2Field extends Component {
	componentWillMount() {
    let data_ = this.props.data;
    let data1 = [];
    let data2 = [];
    data_.map((item, index) => {
      const {id, name} = item;
      data1.push({id, name})
    });
    let data = [data1, data2];
    this.setState({
      data,
      data_
    })
  }
	render() {
    let {value} = this.props;
    if (!value) value=this.props.placeholder;
    let textStyle = {alignItems: 'flex-start', textAlign: 'left'};
    if (!this.props.value)
      textStyle = {...textStyle, color: '#9a9a9a'};
    if (this.props.rightAligned)
      textStyle = {...textStyle, textAlign: 'right', paddingRight: 50*em};
		return (
			<View style={formStyles.formField}>
				<View  style={formStyles.fieldLabelWrapper}>
					<Text style={formStyles.fieldLabel}>
            {this.props.label}
					</Text>
				</View>
				<View style={{
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center',
          width: '75%',
          position: 'relative'
        }}>
					<CascadePicker data={this.state.data} onWheelChange={this.onWheelChange.bind(this)} iconStyle={{display: 'none'}} inputStyle={{borderWidth: 0, marginLeft: 0, marginRight: 0, alignItems: 'flex-start', textAlign: 'left', width: W*0.75, zIndex: 12, backgroundColor: 'transparent'}} textStyle={textStyle} inputValue={value} pickerName={this.props.pickerName?this.props.pickerName:''} onResult={this.onChangeField.bind(this)}
					/>
					<Image source={require('../images/注册_图标_导向.png')} style={{width: 24*em*0.8, height: 42*em*0.8, position: 'absolute', right: 0*em, top: 30*em, zIndex: 11}}/>
				</View>
			</View>

		)
	}
	onWheelChange(item, index, wheelNumber) {
		if (wheelNumber==0) {
			const {value} = item;
			const {data_} = this.state;
			let data1 = [];
			let data2 = [];
			data_.map((item_) => {
        const {id, name} = item_;
        data1.push({id, name});
				if (item_.name==item.label){
        	item_.children.map((item2_) => {
            const {id, name} = item2_;
            data2.push({id, name})
					})
				}
			});
      let data = [data1, data2];
      this.setState({
				...this.state,
				data
      })
		}
	}
  onChangeField(fieldText, selectIndex, fieldValue) {
    let fieldName = this.props.name;
    this.props.onChangeField(fieldName, fieldValue);
  }
}