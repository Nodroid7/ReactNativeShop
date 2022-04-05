import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {em} from '../../config/uivar'
import { SmallPrimaryButton} from '../../components/elements5'
import {Tiny_Image} from "../../components/elements4";
import {BottomNavBar} from "../../components/bottom-nav-bar"
import {InputField, InputFieldWithNextAndImage} from "../../components/inputs"
import {TextButton, PrimaryButton} from '../../components/buttons';
import {connect} from 'react-redux'
import {API_BASE_URL} from "../../config/app";
const axios = require('axios');


class Scene extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};

	constructor(props){
		super(props);
		this.state = {
			gender: 'm',
			user_name: '',
			user_phone: '',
			apartment: '',
			user_address: ''
		};
	}

	gotoBack = () => {
		this.props.navigation.goBack()
	};

	gotoHome = () => {
		this.props.navigation.navigate('services/index')
	};


	onChangeName = (fieldName, fieldValue) => {
		this.setState({...this.state, user_name:fieldValue});
    };

	onChangePhone = (fieldName, fieldValue) => {
		this.setState({...this.state, user_phone: fieldValue});
	};

	onChangeAddress = (fieldName, fieldValue) => {
		this.setState({...this.state, user_address: fieldValue});
	};

	saveAddress = () => {
		let self = this;
		axios.get(API_BASE_URL + 'auth/user/setUserAddress', {
			params: {
				user_name: this.state.user_name,
				gender: this.state.gender,
				user_phone: this.state.user_phone,
				user_address: this.state.user_address,
				apartment : this.props.navigation.state.params.apartment
			}
		}).then (function (res) {
			if (res.data.status === 'success')
				self.props.navigation.navigate('register/apartment_shop');
			else{
				alert(res.data.status);
				self.props.navigation.navigate('register/register_address');
			}
		}).catch(function (err) {
			alert("network error");
        })
    };

    gotoAddAddress = () => {
        this.props.navigation.navigate('register/add_home')
    }

	render(){

        const buttons = [
        	{
				label: ' 首页',
				normalImage: require('../../images/icons/home.png'),
				isRead: false,
				action: this.gotoHome.bind(this)
			}, {
				label: ' 返回',
				normalImage: require('../../images/icons/back.png'),
				isRead: false,
				action: this.gotoBack.bind(this)
			}
        ];
        const apartment_info = this.props.navigation.state.params.apartment;
		return(
			<View style={{backgroundColor: '#f6f6f6', flex: 1}}>
				<View style={{backgroundColor: '#fff'}}>
					<InputField label="联系人" name='old_pwd' placeholder="姓名" onChangeField={this.onChangeName.bind(this)}/>
					<View style={{borderBottomWidth: 1*em, borderBottomColor: '#ccc', flexDirection: 'row', alignItems : 'center', width: '100%',  height: em*93}}>
						{
							this.state.gender === 'm' ?
								<TextButton
									title='先生'
									style={{paddingLeft: 110*em}}
									textStyle={{
										backgroundColor: '#fff8e7',
										borderColor: '#ffb942',
									}}
									textColor={{color: '#ffb847'}}
									onPress={() => {this.setState({...this.state, gender:'m'})}}
								/>
								:
								<TextButton
									title='先生'
									style={{paddingLeft: 110*em}}
									textStyle={{
										backgroundColor: '#fff',
										borderColor: '#e1e1e1',
									}}
									onPress={() => {this.setState({...this.state, gender:'m'})}}
								/>
						}
						{
							this.state.gender === 'f' ?
								<TextButton
									title='女士'
									style={{paddingLeft: 30*em}}
									textStyle={{
										backgroundColor: '#fff8e7',
										borderColor: '#ffb942',
									}}
									textColor={{color: '#ffb847'}}
									onPress={() => {this.setState({...this.state, gender:'f'})}}
								/>
								:
								<TextButton
									title='女士'
									style={{paddingLeft: 30*em}}
									textStyle={{
										backgroundColor: '#fff',
										borderColor: '#e1e1e1',
									}}
									onPress={() => {this.setState({...this.state,  gender:'f'})}}
								/>
						}
					</View>
					<InputField label="电话" name='old_pwd' placeholder="手机号码" onChangeField={this.onChangePhone.bind(this)}/>
					{
						apartment_info == null?
							<InputFieldWithNextAndImage label="小区名" image={require('../../images/icons/drop-down.png')} text="点击选择" name='old_pwd' placeholder="点击选择" goto={this.gotoAddAddress.bind(this)}/>
							:
							<InputFieldWithNextAndImage label="小区名" image={require('../../images/icons/drop-down.png')} text={apartment_info} name='old_pwd' placeholder="点击选择" goto={this.gotoAddAddress.bind(this)} />
					}
					<InputField label="门牌号" name='old_pwd' placeholder="例 :6号楼205室" onChangeField={this.onChangeAddress.bind(this)}/>
				</View>
				<View style={{margin: 20*em}}>
					{
						this.state.user_name == '' || this.state.user_phone == '' || this.state.user_address=='' || this.props.navigation.state.params.apartment == null ?
							<PrimaryButton title='保存地址' onPress={this.saveAddress.bind(this)} disabled/>
							:
							<PrimaryButton title='保存地址' onPress={this.saveAddress.bind(this)}/>
					}

				</View>
				<BottomNavBar chosenButton={2} buttons={buttons} />
			</View>
		)
	}
}
export default Scene;