import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {API_BASE_URL} from "../../config/app";
const axios = require('axios');

class Scene extends Component {
	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};

	componentWillMount() {
		this.load_data();
		this.listener = this.props.navigation.addListener('didFocus', this.load_data);
	}
	constructor(){
		super();
		this.state={
			bottom_status:2,
			content1:[],
			content2:[],
		}
	}

	load_data = ()=>{
		var self = this;
		axios.get(API_BASE_URL + 'myaccount/my_info/news',{
				params:{
					user_id:1
				}
			}
		).then(function (res) {
			const {data} = res;
			if(data.status=='success'){
				let data = res.data.read_news;
				var content = [];
				for( i=0;i<data.length;i++){
					content.push({title:data[i].title, time:data[i].real_date, content:data[i].content, id:data[i].id});
				}
				self.setState({
					content1:content
				});

				let data1 = res.data.news;
				var content1 = [];
				for( i=0;i<data1.length;i++){
					content1.push({title:data1[i].title, time:data1[i].real_date, content:data1[i].content});
				}
				self.setState({
					content2:content1
				})
			}
			else if(data.status == 'false'){

			}
		});
	};

	goTo = (data) => {
		switch(data){
			case 'eval-goods':
				this.props.navigation.navigate('myaccount/eval-goods');
				break;
			case '???':
				break;
		}
		
	};
	goToNews_detail = (id)=>{
		var self = this;
		this.props.navigation.navigate('myaccount/news-detail',{
			id:this.state.content1[id].id,
		});
		self.load_data();
	};
	gotoBack = () => {
		this.props.navigation.goBack();
	};
	gotoHome = () => {
        this.props.navigation.navigate('services/index')
	};
	render(){
		const buttons = [{
			label: '首页',
			normalImage: require('../../images/icons/home.png'),
			action: this.gotoHome.bind(this)
		}, {
			label: '返回',
			normalImage: require('../../images/icons/back.png'),
			action: this.gotoBack.bind(this)
		}];

		return(
			<View style={{flex: 1}}>
				<ScrollView style={{height: 400*em, backgroundColor: '#fff', padding: 25*em, marginBottom: 15*em}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20*em}}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Image source = {require('../../images/icons/clock.png')} style={{height: 30*em, width: 30*em, paddingRight: 20*em}}/>
							<Text style={{fontSize: 20*em, marginLeft:10*em}}>最新消息</Text>
						</View>
						<Text style={{fontSize: 20*em,}}>숲部已读</Text>
					</View>
					{
						this.state.content1.map((item, index) => {
							return (
								<ScrollView key={index} showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection: 'row', borderBottomWidth: 1*em, borderBottomColor: '#eee'}}>
									<TouchableOpacity style={{width:600*em, flexDirection:'row'}} onPress={this.goToNews_detail.bind(this, index)}>
										<View style={{justifyContent: 'center', alignItems: 'center'}}>
											<Image source = {require('../../images/speaker.png')} style={{width: 70*em, height: 70*em}}/>
										</View>
										<View style={{marginLeft:10*em, marginTop:15*em}}>
											<View style={{flexDirection:'row', justifyContent: 'space-between'}}>
												<View style={{flexDirection:'row'}}>
													<Text style={{fontSize: 20*em}}>{item.title}</Text>
													<Image source={require('../../images/图层-19.png')} style={{height: 5*em, width: 5*em, alignItems: 'center', justifyContent:'center'}}/>
												</View>
												<View>
													<Text style={{fontSize: 18*em,marginRight:10*em}}>{item.time}</Text>
												</View>
											</View>
											<Text style={{fontSize: 18*em, width:520*em,alignItems: 'center'}}>{item.content}</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity style={{marginLeft:10*em,height: 100*em, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f00'}}>
										<Text style={{textAlign:'center', width:120*em, fontSize: 20*em, color: '#fff'}}>删除</Text>
									</TouchableOpacity>
								</ScrollView>
							)
						})
					}
				</ScrollView>
				<ScrollView style={{height: 500*em, backgroundColor: '#fff', padding: 25*em, marginBottom: 15*em}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20*em}}>
						<View style={{flexDirection: 'row', alignItems: 'center'}}>
							<Image source = {require('../../images/icons/clock.png')} style={{height: 30*em, width: 30*em, paddingRight: 20*em}}/>
							<Text style={{fontSize: 20*em, marginLeft:10*em}}>两周前的消息</Text>
						</View>
					</View>
                    {
                        this.state.content2.map((item, index) => {
                            return (
								<ScrollView key={index} showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection: 'row', borderBottomWidth: 1*em, borderBottomColor: '#eee'}}>
									<TouchableOpacity style={{width:600*em, flexDirection:'row'}} onPress={this.goTo.bind(this, 'news-detail')}>
										<View style={{justifyContent: 'center', alignItems: 'center'}}>
											<Image source = {require('../../images/speaker.png')} style={{width: 70*em, height: 70*em}}/>
										</View>
										<View style={{marginLeft:10*em, marginTop:15*em}}>
											<View style={{flexDirection:'row', justifyContent: 'space-between'}}>
												<View style={{flexDirection:'row'}}>
													<Text style={{fontSize: 20*em}}>{item.title}</Text>
												</View>
												<View>
													<Text style={{fontSize: 18*em,marginRight:10*em}}>{item.time}</Text>
												</View>
											</View>
											<Text style={{fontSize: 18*em, width:520*em,alignItems: 'center'}}>{item.content}</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity style={{height: 100*em, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f00'}}>
										<Text style={{textAlign:'center', width:120*em, fontSize: 20*em, color: '#fff'}}>删除</Text>
									</TouchableOpacity>
								</ScrollView>
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

const style = StyleSheet.create({
	record:{
		paddingLeft:20*em, paddingRight:20*em, paddingTop:25*em, paddingBottom:25*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'
	}
});