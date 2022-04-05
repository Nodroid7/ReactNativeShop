import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {em} from '../../config/uivar'
import {PrimaryButton, SmallPrimaryButton} from '../../components/elements5'
import {connect} from 'react-redux'
const axios = require('axios');
import {setLoggedUser} from "../../store/actions/auth"
import {Tiny_Image} from "../../components/elements4";
import {API_BASE_URL, SERVER_BASE_URL} from "../../config/app";


class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    componentWillMount() {
    	this.userInfo_init();
	}
	constructor (props) {
		super(props);
		this.state = {
			userInfo: {
                user_id: 'aaa',
                user_pwd: 'aaa',
				user_name: '',
				user_phone : 111,
				user_portfolio: '',
			}
		};
	}

	userInfo_init() {
    	let self = this;
    	const {user_phone} = this.state.userInfo;
    	axios.get(API_BASE_URL + 'auth/login/set_redux', {
    		params: {
    			user_phone: user_phone
			}
		}).then(function (res) {
			self.setState({userInfo: res.data.userInfo});
			self.props.setLoggedUser(res.data.userInfo)
        });
	}
    gotoRegisterAddress(){
        this.props.navigation.navigate('register/register_address', {area:null})
    }

	render(){
        return(
			<View>
				<ImageBackground source={require('../../images/first_background.jpg')} style={{height: '100%', width: '100%'}}>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<View style={{}}>
							<Image source={{uri: SERVER_BASE_URL + this.state.userInfo.user_portfolio}} style={{height: 107*em, width: 107*em, marginTop: 130*em, borderRadius: 60*em}}/>
						</View>
						<Text style={{fontSize: 22*em, marginTop: 5*em, color: '#6c6c6c'}}>{this.state.userInfo.user_name}</Text>
						<TouchableOpacity>
							<View style={{marginTop: 418*em}}>
								<Image source={require('../../images/compass.png')} style={{height: 133*em, width: 133*em}}/>
							</View>
						</TouchableOpacity>
						<Text style={{fontSize: 24*em, marginTop: 95*em, color: '#9c9c9c'}}>请先设置地址</Text>
						<View style={{width: 264*em, marginTop: 11*em}}>
							<Tiny_Image
								title="设置地址"
								onPress={this.gotoRegisterAddress.bind(this)}
								avatar = {require('../../images/icons/plus.png')}
								style={{
                                    backgroundColor: '#ffca4c',
                                    borderColor: '#F5FCFF',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    paddingTop: 17*em,
                                    paddingBottom: 17*em
                                }}
								textStyle={{
                                    color: '#bb6912',
                                    fontSize: 25*em
                                }}
							/>
						</View>
					</View>
				</ImageBackground>
			</View>
        )
    }
}

export default connect (state => ({
	userInfo: state.authReducer.userInfo
	}),
	(dispatch) => ({
        setLoggedUser: (userInfo) => dispatch(setLoggedUser(userInfo)),
	}))(Scene)

