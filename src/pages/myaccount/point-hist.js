import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {TabBar} from "../../components/tabbar";
import {API_BASE_URL} from "../../config/app";
const axios = require('axios');


class Scene extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};
	constructor(){
		super();
		this.state={
			tab_status:0,
			content:[],
			content1:[],
		}
	}
	componentWillMount() {
		var self = this;
		axios.get(API_BASE_URL+'myaccount/my_estimation/get_order_point',{
			params:{
				user_id: 1,
			}
		}).then(function (res) {
			const {data} = res;
			if(data.status=='success'){
				let data = res.data.point_data;
				var content = [];
				for( i=0;i<data.length;i++){
					data[i].received_point = '+' + data[i].received_point;
					content.push({point:data[i].received_point, text:data[i].store_name, time:data[i].real_time});
				}
				self.setState({
					content:content
				})
			}
			else if(data.status == 'false'){

			}
		});
		axios.get(API_BASE_URL + 'myaccount/my_estimation/get_used_point',{
			params: {
				user_id:1,
			}
		}).then( function (res) {
			const {data} = res;
			if(data.status == 'success'){
				let data = res.data.usedpoint_data;
				var content1 = [];
				for(i=0;i<data.length;i++){
					data[i].used_point = '-' + data[i].used_point;
					content1.push({point:data[i].used_point,text:'订单号:' + data[i].order_number,time:data[i].order_number});
				}
				self.setState({
					content1:content1
				})
			}

		});
	}
	gotoHome = () => {
        this.props.navigation.navigate('services/index')
	};
	
	gotoBack = () => {
		this.props.navigation.goBack();
	};
	goto = ()=>{};

	changeNavStatus = (id) => {
		this.setState({tab_status: id});
	};

	render_component = (content) => {
		return(
			<View style={{width:W, paddingRight:40*em}}>
				{content.map((item, index) =>{
					return(
						<View key={index} style={{marginTop:10*em, backgroundColor:'#fff'}}>
							<View style={style.record}>
								<View style={{}}>
									<Text style={{color:'#000', fontSize:20*em}}>{item.text}</Text>
									<Text style={{fontSize:15*em}}>{item.time}</Text>
								</View>
								{item.point.charAt(0) == '+' ? <Text style={{ color:'rgb(34,172,56)', fontSize:30*em, fontWeight:'bold'}}>{item.point}</Text>
									: <Text style={{ color:'rgb(230,0,18)', fontSize:30*em, fontWeight:'bold'}}>{item.point}</Text>
								}
							</View>
						</View>
					)
				})}
			</View>
		)
	};

	render() {
		const buttons = [{
			label: '首页',
			normalImage: require('../../images/icons/home.png'),
			action: this.gotoHome.bind(this)
		}, {
			label: '返回',
			normalImage: require('../../images/icons/back.png'),
			action: this.gotoBack.bind(this)
		}];

		const tabs = [{
			label: '收入',
			action: this.changeNavStatus.bind(this, 0),
			screen: this.render_component(this.state.content)
		}, {
			label: '支出',
			action: this.changeNavStatus.bind(this, 1),
			screen: this.render_component(this.state.content1)
		}];
		
		return (
			<View style={{flex: 1}}>
				<ScrollView style={{marginBottom:90*em}}>
					<View style={{width:W, height:146*em, paddingLeft:20*em, paddingRight:20*em, paddingTop:10*em, marginBottom:10*em}}>
						<ImageBackground source={require('../../images/jifen-bar.png')}
						                 style={{width: '100%', height:'100%', borderRadius:10*em}} resizeMode="stretch">
							<View style={{margin:20*em, flexDirection:'row', justifyContent:'space-between'}}>
								<View style={{flexDirection:'row', }}>
									<Image source={require('../../images/avatar.png')} style={{width:90*em, height:90*em}} />
									<View>
										<View style={{flexDirection:'row', alignItems:'center'}}>
											<Text style={{fontWeight:'bold', fontSize:15*em, marginLeft:20*em, color:'#fff'}}>当前</Text>
											<Text style={{fontWeight:'bold', fontSize:25*em, color:'#ff0'}}> 100 </Text>
											<Text style={{fontWeight:'bold', fontSize:15*em, color:'#fff'}}>分</Text>
										</View>
										
										<Text style={{fontSize:15*em, marginTop:5*em, marginLeft:20*em, color:'#eef'}}>用贡献得积分，继续加油哦~</Text>
									</View>
								</View>
								<TouchableOpacity  onPress={this.goto.bind(this)}>
									<View style={{flexDirection:'row', backgroundColor:'transparent', paddingLeft:10*em, paddingRight:10*em, paddingTop:5*em, paddingBottom:5*em, alignItems:'center', borderColor:'#ff0', borderWidth:1*em, borderRadius:30*em, }}>
										<Text style={{fontSize: 15*em, color:'#ff0'}}>积分规则</Text>
									</View>
								</TouchableOpacity>
							
							</View>
						</ImageBackground>
					</View>
					<View style={{width:W, paddingLeft:20*em, paddingRight:20*em}}>
						<TabBar tabs={tabs} chosenButton={this.state.tab_status} />
					</View>
				</ScrollView>
				<BottomNavBar buttons={buttons} />
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