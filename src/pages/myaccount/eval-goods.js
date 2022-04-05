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
	
	constructor() {
		super();
		this.state = {
			content: []
		}
	}
	componentWillMount() {
		this.load_data();
	}
	load_data = ()=>{
		var self = this;
		axios.get(API_BASE_URL + 'myaccount/my_estimation/estimation_cate',{
			params:{
				user_id: 1,
			}
		}).then(function (res) {
			const {data} = res;
			if(data.status=='success'){
				let data = res.data.order_data;
				var content = [];
				for( i=0;i<data.length;i++){
					content.push({name:data[i].user_name, text:data[i].shop, date:data[i].real_date, detail:data[i].detail, value:data[i].charge_type, store_name:data[i].store_name, point_order_id:data[i].point_order_id});
				}
				self.setState({
					content:content
				})
			}
			else if(data.status == 'false'){

			}
		});
	};
		gotoBack = () => {
		this.props.navigation.goBack();
	};
	
	goto = () => {
	};
	gotoHome = () => {
        this.props.navigation.navigate('services/index')
	};
	delete_hist = (id)=>{
		var self = this;
		axios.get(API_BASE_URL + 'myaccount/my_estimation/delete_hist',{
			params:{
				point_order_id: this.state.content[id].point_order_id
			}
		}).then(function (res) {
			const {data} = res;
			if(data.status=='success'){
				self.load_data();
			}
			else if(data.status == 'false'){

			}
		});
	};
	starRender = (val) => {
		switch(val){
			case 0:
				rlt = [0,0,0,0,0];
				break;
			case 1:
				rlt = [1,0,0,0,0];
				break;
			case 2:
				rlt = [1,1,0,0,0];
				break;
			case 3:
				rlt = [1,1,1,0,0];
				break;
			case 4:
				rlt = [1,1,1,1,0];
				break;
			case 5:
				rlt = [1,1,1,1,1];
				break;
		}
		rlt1 = rlt.map((item, index) => {
			return (
				<View key={index}>
					{item === 1 ? <Image source={require('../../images/icons/star.png')} style={{height: 12*em, width: 12*em, marginRight: 10*em}}/> : <Image source={require('../../images/icons/disable_star.png')} style={{height: 12*em, width: 12*em, marginRight: 10*em}}/>}
				</View>
			)
		});
		return(
			<View style={{flexDirection: 'row', alignItems: 'center'}}>{rlt1}</View>
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
		return (
			<View style={{flex: 1}}>
				<View style={{width:W, height:220*em, justifyContent:'center', alignItems:'center'}}>
					<ImageBackground source={require('../../images/图层.png')}
					                 style={{width: '100%', height: '100%', justifyContent:'center'}}>
						<View style={{alignItems:'center', }}>
							<Image source={require('../../images/avatar.png')} style={{width:90*em, height:90*em}} />
							<Text style={{fontWeight:'bold', fontSize:19*em, color:'#000', marginTop:10*em}}>PNG1984</Text>
							<Text style={{fontSize:15*em, color:'#000'}}>以贡献4条评价</Text>
						</View>
					</ImageBackground>
				</View>
				<ScrollView style={{marginBottom: 60*em}}>
					{
						this.state.content.map((item, index)=>{
							return(
								<View key={index} style={{width:W, padding:20*em, backgroundColor:'#fff', marginBottom: 10*em}}>
									<View style={{flexDirection:'row', justifyContent:'space-between', height:42*em, borderBottomColor: '#eef', borderBottomWidth: 1*em}}>
										<TouchableOpacity style={{flexDirection:'row',alignItems:'center', paddingBottom: 20*em}}>
											<Image source={require('../../images/图层-9.png')} style={{width:22*em, height:16*em}}/>
											<Text style={{fontSize:20*em}}> {item.store_name}</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingBottom: 20*em }} onPress={this.delete_hist.bind(this,index)}>
											<Image source={require('../../images/delete.png')} style={{width:21*em, height:20*em}}/>
											<Text style={{fontSize:20*em}}> 删除</Text>
										</TouchableOpacity>
									</View>
									<View style={{marginTop:20*em, flexDirection:'row'}}>
										<Image source={require('../../images/avatar.png')} style={{width:60*em, height:60*em}} />
										<View style={{marginLeft: 20*em}}>
											<View style={{width:520*em,flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
												<Text style={{fontWeight:'bold', color:'black'}}>{item.name}</Text>
												<Text style={{fontSize:18*em}}>{item.date}</Text>
											</View>
											<View style={{flexDirection:'row',alignItems:'center'}}>
												<Text style={{fontSize:20*em}}>商家 :</Text>
												{item.value > 3 ? <Text style={{fontSize:20*em}}>满意</Text>
													: <Text style={{fontSize:20*em}}>不满意</Text>}
											</View>
											<View style={{flexDirection:'row'}}>
												<Text style={{fontSize:20*em}}>商品 : </Text>
												{this.starRender(item.value)}
												{item.value > 3 ? <Text style={{fontSize:20*em}}> 无可挑易</Text>
													: <Text style={{fontSize:20*em}}> 一般</Text>}
											</View>
											<Text style={{fontSize:25*em, width: '77%'}}>{item.detail}</Text>
										</View>
									</View>
								</View>
							)
						})
					}
				</ScrollView>
				<BottomNavBar buttons={buttons} />
			</View>
		)
	}
}
export default Scene;