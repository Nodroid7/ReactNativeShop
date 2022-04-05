import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomBar} from "../../components/bottombar";
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet} from 'react-native';


class Scene extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};
	constructor(){
		super();
		this.state={
			bottom_status:2,
		}
	}
	goTo = (data) => {
        switch (data) {
            case 'index':
                this.props.navigation.navigate('myaccount/' + data);
                break;
            case 'services/all_orders':
                this.props.navigation.navigate(data);
                break;
            case 'services/index':
                this.props.navigation.navigate(data);
                break;
			case 'eval-goods':
				this.props.navigation.navigate('myaccount/' + data);
				break;
			case 'news':
				this.props.navigation.navigate('myaccount/' + data);
				break;
			case 'goods-page':
				this.props.navigation.navigate('myaccount/' + data);
				break;
			case 'chat':
				this.props.navigation.navigate('myaccount/' + data);
				break;
			case 'feedback':
				this.props.navigation.navigate('myaccount/' + data);
				break;
			case 'version':
				this.props.navigation.navigate('myaccount/' + data);
				break;
        }
	};
    changeBottomStatus = (id) => {
        this.setState({bottom_status:id});
    };
	go2PointHist = () => {
		this.props.navigation.navigate('myaccount/point-hist');
	};
	render(){
		const buttons = [{
			label: '首页',
			normalImage: require('../../images/shouye.png'),
			chosenImage: require('../../images/shouye-on.png'),
			isRead: false,
			action: this.goTo.bind(this, 'services/index')
		}, {
			label: '订单',
			normalImage: require('../../images/dingdan.png'),
			chosenImage: require('../../images/dingdan-on.png'),
			isRead: false,
			action: this.goTo.bind(this, 'services/all_orders')
		},{
			label: '我的',
			normalImage: require('../../images/wode.png'),
			chosenImage: require('../../images/wode-on.png'),
			isRead: false,
			action: this.goTo.bind(this, 'index')
		}
		];
		
		return(
			<View style={{flex: 1}}>
				<View style={{width:W, height:230*em, justifyContent:'center', alignItems:'center'}}>
					<ImageBackground source={require('../../images/winter-flat.png')}
					                 style={{width: '100%', height: '100%'}}>
						<View style={{marginTop:20*em, alignItems:'center'}}>
							<Text style={{color:'rgb(11,150,154)'}}>下拉查看日签</Text>
							<Image source={require('../../images/图层-18-副本-2.png')} style={{marginTop:5*em, width:10, height:10}} />
						</View>
					</ImageBackground>
				</View>
				<View style={{width:W}}>
					<View style={{marginTop:-30*em, height:150*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff', borderRadius:10*em,}}>
						<View style={{paddingLeft:20*em, paddingRight:20*em, paddingTop:30*em, paddingBottom:30*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
							<View style={{flexDirection:'row', alignItems:'center'}}>
								<Image source={require('../../images/avatar.png')} style={{width:90*em, height:90*em}} />
								<Text style={{fontWeight:'bold', fontSize:19*em, marginLeft:20*em, color:'#000'}}>PNG1984</Text>
							</View>
							
							<TouchableOpacity style={{alignItems:'center'}} onPress={this.go2PointHist.bind(this)}>
								<View style={{flexDirection:'row', backgroundColor:'rgb(255,202,76)', paddingLeft:30*em, paddingRight:30*em, paddingTop:10*em, paddingBottom:10*em, alignItems:'center'}}>
									<Image source={require('../../images/64-金币.png')} style={{width:30*em, height:30*em}}/>
									<Text> 积分</Text>
									<Text style={{color:'#f00', fontWeight:'bold'}}> 60</Text>
								</View>
							</TouchableOpacity>
							
						</View>
					</View>
					{/*                       我的评价                                                         */}
					<View style={{marginTop:10*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
						<View style={style.record}>
							<View style={{flexDirection:'row', alignItems:'center'}}>
								<Image source={require('../../images/留言_2.png')} style={{width:25*em, height:22*em}} />
								<Text style={{marginLeft:20*em}}>我的评价</Text>
							</View>
							
							<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this,'eval-goods')}>
									<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
							</TouchableOpacity>
						</View>
					</View>
					{/*                       我的消息            */}
					<View style={{marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
						<View style={style.record}>
							<View style={{flexDirection:'row', alignItems:'center'}}>
								<Image source={require('../../images/消息_2.png')} style={{width:19*em, height:21*em}} />
								<Text style={{marginLeft:20*em}}>我的消息</Text>
							</View>
							
							<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this, 'news')}>
								<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{/*                       积分商城              */}
				<View style={{marginTop:10*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
					<View style={style.record}>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Image source={require('../../images/商店_2.png')} style={{width:23*em, height:21*em}} />
							<Text style={{marginLeft:20*em}}>积分商城</Text>
						</View>
						
						<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this, 'goods-page')}>
							<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
						</TouchableOpacity>
					</View>
				</View>
				{/*                       联系客服                          */}
				<View style={{marginTop:10*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
					<View style={style.record}>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Image source={require('../../images/图层-15.png')} style={{width:24*em, height:21*em}} />
							<Text style={{marginLeft:20*em}}>联系客服</Text>
						</View>
						
						<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this, 'chat')}>
							<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{marginTop:1*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
					<View style={style.record}>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Image source={require('../../images/图层-18.png')} style={{width:19*em, height:19*em}} />
							<Text style={{marginLeft:20*em}}>建议与反馈</Text>
						</View>
						
						<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this, 'feedback')}>
							<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{marginTop:1*em, marginLeft:20*em, marginRight:20*em, backgroundColor:'#fff'}}>
					<View style={style.record}>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<Image source={require('../../images/开发_2.png')} style={{width:23*em, height:19*em}} />
							<Text style={{marginLeft:20*em}}>版本</Text>
						</View>
						
						<TouchableOpacity style={{alignItems:'center'}} onPress={this.goTo.bind(this,'version')}>
							<Image source={require('../../images/图层-17.png')} style={{width:10*em, height:19*em}}/>
						</TouchableOpacity>
					</View>
				</View>
				<BottomBar chosenButton={this.state.bottom_status} buttons={buttons} />
			</View>
		)
	}
}
export default Scene;

const style = StyleSheet.create({
	record:{
		paddingLeft:20*em, paddingRight:20*em, paddingTop:25*em, paddingBottom:25*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'
	}
});