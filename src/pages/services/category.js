import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground,TouchableWithoutFeedback, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";

import {TopBarWithSearch} from "../../components/topbar"
import {SliderTabBar} from "../../components/sliderTabBar"
import {em, W} from '../../config/uivar'
import {PagerDotIndicator, IndicatorViewPager} from 'React-Native-ViewPager-master'
const axios  = require('axios');
import {connect} from 'react-redux'
import {SERVER_BASE_URL, API_BASE_URL} from "../../config/app";
import {setCategory} from "../../store/actions/services";

//Data

const headerStyles = StyleSheet.create({
	flexRow: {flexDirection: 'row'},
	justBetween: {justifyContent: 'space-between'},
	container: {marginTop: 75*em, marginBottom: 35*em, paddingLeft: 20*em, paddingRight:20*em, width: '100%', height: 100*em},
	mainImg: {width: 98*em, height: 98*em, borderRadius: 4*em, borderWidth: 4*em, borderColor: 'white'},
	title: {fontSize: 28*em, color: 'white', fontWeight: 'bold'},
	detail: {fontSize: 20*em, color: 'rgb(65, 65, 65)'},
	rightCallBack: {width: 57*em, height: 57*em, borderRadius: 28.5*em, backgroundColor: 'white'},
	rightCall: {width: 49*em, height: 49*em},
	plusbutton:{width:35*em,height:35*em}
});
const bodyStyles = StyleSheet.create({
	flexRow: {flexDirection: 'row'},
	typeGroup: {width: '20%',backgroundColor:'rgb(245,245,245)'},
	goodsGroup: {width: '80%'},
	textRecord:{backgroundColor:'#fff'}
});

class Scene extends Component {

	static navigationOptions = {
		headerStyle: {
			display: 'none'
		}
	};
	constructor(){
		super();
		this.state = {
			selectedIndex: 0,
			selectedTypeIndex:0,
			amountBuyGood:0,
			totalBuyModal:false,
			optionGoodModal:false,
			isModalVisible: false,
			categories:[],
			underCategories:[],
			goodGroupContent : [{
				imagePath:require('../../images/icon-good.png'),
				goodName:'美味蛋糕1',
				mass:'20',
				price:'25',
				option:0,
				amount:0,
				selectedOptionIndex: 1,
				good_Option_Name:'口味',
				good_Option:['麻辣','微辣','中辣','特辣','特特辣']

			},{
				imagePath:require('../../images/icon-good.png'),
				goodName:'美味蛋糕2',
				mass:'20',
				price:'25',
				option:1,
				amount:0,
				selectedOptionIndex: 1,
				good_Option_Name:'口味',
				good_Option:['麻辣','微辣','中辣','特辣','特特辣']

			}],
			select:null,
			typeGroupContent : [{
				label:'买过',
				imagePath:'icon-买过.png'
			},{
				label:'热销',
				imagePath:'icon-热销.png'
			},{
				label:'折扣',
				imagePath:'icon-折扣.png'
			}],
			alphabet:[{
				name:'A',
			},{
				name:'B',
			},{
				name:'C'
			},{
				name:'D'
			},{
				name:'E'
			},{
				name:'F'
			},{
				name:'G'
			},{
				name:'H'
			},{
				name:'I'
			},{
				name:'J'
			},{

			}]
		};

	}
	componentWillMount(): void {
		var self = this;
		axios.get(API_BASE_URL + 'services/goods/get-categories')
			.then(function (res) {
				let {data} = res;
				data.good_list.map((item,index) => {
					if(item.parent_id === 0){
						self.state.categories.push({main: item.name});
						self.forceUpdate();
					}
				});
			});
		this.setState({selectedIndex:this.props.selectedCategory});
		this.setState({underCategories: this.props.underCategory});
		this.forceUpdate();
		if(this.props.underCategory[this.props.selectedCategory][0])
			var categoryId = this.props.underCategory[this.props.selectedCategory][0].id;
		axios.get(API_BASE_URL + 'services/goods/get-goods',{
			params:{
				categoryId:categoryId
			}
		}).then(function (res) {
			let{data} = res;
			console.log(data.good_list);
		})
	}

	select_Good_Index;

	setSelect = (id)=>{
		this.setState({select:id});
	};
	gotoCateInfo = ()=>{
		this.props.navigation.navigate('services/cateinfo');
	};

	goBack() {
		this.props.navigation.goBack();
	}
	gotoPaydone = ()=>{
		this.props.navigation.navigate('services/paydone');
	};
    goTo = (data) => {

        this.props.navigation.navigate('services/' + data);

    };
	gotocategory = ()=>{
		this.props.navigation.navigate('services/category');
	};
    onClose = () => {
        this.setState({
            ...this.state,
            isModalVisible: false
        });
        this.props.navigation.navigate('services/category');
    };
	onClickMainItem(index) {
		this.state.selectedIndex = index;
		this.state.selectedTypeIndex = 0;
		this.forceUpdate();
	}
	onChangeTypeIndex(index){
			this.state.selectedTypeIndex = index;
			this.forceUpdate();

	}
	change_good_option(index){
		this.state.goodGroupContent[this.select_Good_Index].selectedOptionIndex = index;
		this.forceUpdate();
	}
	buyGood(goodname){
		this.state.amountBuyGood++;
		this.forceUpdate();
		for(var i = 0; i < this.state.goodGroupContent.length; i++){
			if(this.state.goodGroupContent[i].goodName === goodname){
				this.state.goodGroupContent[i].amount++;
				this.forceUpdate();
				break;
			}
		}
	}
	sellOneAllGood(goodname){
		for(var i = 0; i < this.state.goodGroupContent.length; i++){
			if(this.state.goodGroupContent[i].goodName === goodname){
				this.state.amountBuyGood -= this.state.goodGroupContent[i].amount;
				this.state.goodGroupContent[i].amount = 0;
				this.forceUpdate();
				break;
			}
		}
	}
	sellAllGood(){
		for(var i = 0; i < this.state.goodGroupContent.length; i++){
				this.state.amountBuyGood = 0;
				this.state.goodGroupContent[i].amount = 0;
				this.forceUpdate();
		}
	}
	sellGood(goodname){
		this.state.amountBuyGood--;
		this.forceUpdate();
		for(var i = 0; i < this.state.goodGroupContent.length; i++){
			if(this.state.goodGroupContent[i].goodName === goodname){
				this.state.goodGroupContent[i].amount--;
				this.forceUpdate();
				break;
			}
		}
	}
	_renderDotIndicator() {
    	    return <PagerDotIndicator selectedDotStyle={{backgroundColor:'rgb(255, 202, 76)', width:30*em}} pageCount={4} />;
	}
	change_optionGoodModal(goodname){
		this.state.optionGoodModal === true ? this.state.optionGoodModal = false : this.state.optionGoodModal = true
		for(var i = 0; i < this.state.goodGroupContent.length; i++){
			if(this.state.goodGroupContent[i].goodName === goodname){
				this.select_Good_Index = i;
				break;
			}
		}
		this.forceUpdate();
	}
	render_optionModal(){
			return(
				this.state.optionGoodModal ?
				<Modal isVisible={true} style={{justifyContent:'center',alignItems:'center'}} onBackdropPress={this.change_optionGoodModal.bind(this)}>
					<View style={{flexDirection:'column',height:500*em,width:500*em,borderRadius:10*em,backgroundColor:'#fff'}}>
						<View style={{flexDirection:'column',height:400*em,width:500*em}}>
							<View style={{width:450*em,height:70*em,marginLeft:25*em,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:2*em,borderColor:'rgb(213,213,213)'}}>
								<Text style={{fontSize:30*em,color:'#000',marginTop:20*em}}>美味蛋糕</Text>
								<TouchableOpacity style={{width:31*em,height:31*em,marginTop:20*em}} onPress={this.change_optionGoodModal.bind(this)}>
									<Image source={require('../../images/Service/icon_Close_OptionModal.png')} style={{width:31*em,height:31*em}}/>
								</TouchableOpacity>
							</View>
							<View style={{width:450*em,height:330*em,marginLeft:25*em,marginTop:25*em,flexDirection:'column'}}>
								<Text style={{fontSize:30*em,color:'rgb(102,102,102)',width:100*em,height:35*em}}>{this.state.goodGroupContent[this.select_Good_Index].good_Option_Name} :</Text>
								<View style={{width:450*em,height:200*em,flexWrap:'wrap',flexDirection:'row',marginTop:10*em}}>
									{
										this.state.goodGroupContent[this.select_Good_Index].good_Option.map((item,index) => {
											return(
												<View key={index}>
													{
														index !== this.state.goodGroupContent[this.select_Good_Index].selectedOptionIndex ?
															<TouchableOpacity style={{width:100*em,height:50*em,borderRadius:25*em,borderColor:'rgb(209,209,209)',borderWidth: 1*em,marginLeft:30*em,marginTop:20*em,justifyContent:'center',alignItems:'center'}}
																			  onPress={this.change_good_option.bind(this,index)}>
																<Text style={{color:'rgb(85,85,85)',fontSize:20*em}}>{item}</Text>
															</TouchableOpacity>:
															<TouchableOpacity style={{width:100*em,height:50*em,borderRadius:25*em,backgroundColor:'rgb(255,248,231)',borderColor:'rgb(255,178,47)',borderWidth: 1*em,marginLeft:30*em,marginTop:20*em,justifyContent:'center',alignItems:'center'}}
																			  onPress={this.change_good_option.bind(this,index)}>
																<Text style={{color:'rgb(255,178,47)',fontSize:20*em}}>{item}</Text>
															</TouchableOpacity>
													}
												</View>
											)
										})
									}
								</View>
							</View>
						</View>
						<View style={{flexDirection:'row',height:100*em,width:500*em,backgroundColor:'rgb(235,235,235)',borderBottomLeftRadius: 10*em,borderBottomRightRadius: 10*em}}>
							<View style={{flexDirection:'row',width:100*em,height:50*em,marginTop:20*em,marginLeft:30*em}}>
								<Text style={{color:'#f00',fontSize:25*em,marginTop:15*em}}>￥</Text>
								<Text style={{color:'#f00',fontSize:40*em}}>25</Text>
							</View>
							<TouchableOpacity style={{width:200*em,height:45*em,padding:0,marginTop:30*em,marginLeft:170*em}}>
								<Image source={require('../../images/Service/加入购物车-button.png')} style={{width:163*em,height:45*em}} resizeMode={'cover'}/>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>: null
			)

	}
	render_typeGroupComponent(){
		return(
			<ScrollView style={{height:400*em}} showsVerticalScrollIndicator={false}>
				<View>
					{
						this.state.typeGroupContent.map((item,index) => {
							return(
								<View  key={index}>
									{index == this.state.selectedTypeIndex ?
										(<TouchableOpacity style={{flexDirection:'row',width:'100%',height:80*em,paddingLeft:30*em,alignItems:'center',backgroundColor:'#fff',borderColor:'rgb(255,202,76)',borderBottomWidth:1*em}}
														   onPress={this.onChangeTypeIndex.bind(this,index)}>
											<Image source={{uri:SERVER_BASE_URL + 'image/' + item.imagePath}} style={{width:18*em,height:18*em}}/>
											<Text style={{width:60*em,textAlign:'center',fontSize:20*em,color:'#000'}}>{item.label}</Text>
										</TouchableOpacity> ):
										(<TouchableOpacity style={{flexDirection:'row',width:'100%',height:80*em,paddingLeft:30*em,alignItems:'center',backgroundColor:'rgb(245,245,245)',borderColor:'rgb(233,233,233)',borderBottomWidth:1*em}}
														   onPress={this.onChangeTypeIndex.bind(this,index)}>
											<Image source={{uri:SERVER_BASE_URL + 'image/' + item.imagePath}} style={{width:18*em,height:18*em}}/>
											<Text style={{width:60*em,textAlign:'center',fontSize:20*em}}>{item.label}</Text>
										</TouchableOpacity>)}
								</View>
							)
						})
					}
				</View>
				<View>
					{
						this.state.underCategories[this.state.selectedIndex].map((val, idx) => {
							return (
								<View key={idx}>
									{/*<TouchableOpacity style={{flexDirection:'row',width:'100%',height:80*em,alignItems:'center',backgroundColor:'rgb(245,245,245)',borderColor:'rgb(233,233,233)',borderBottomWidth:1*em}}>*/}
										{/*<Text style={{width:'100%',textAlign:'center',fontSize:20*em}}>{val}</Text>*/}
									{/*</TouchableOpacity>*/}
									{(idx + 3) === this.state.selectedTypeIndex ?
										(<TouchableOpacity style={{flexDirection:'row',width:'100%',height:80*em,alignItems:'center',backgroundColor:'#fff',borderColor:'rgb(255,202,76)',borderBottomWidth:1*em}}
														   onPress={this.onChangeTypeIndex.bind(this,idx + 3)}>
											<Text style={{width:'100%',textAlign:'center',fontSize:20*em}}>{val.name}</Text>
										</TouchableOpacity> ):
										(<TouchableOpacity style={{flexDirection:'row',width:'100%',height:80*em,alignItems:'center',backgroundColor:'rgb(245,245,245)',borderColor:'rgb(233,233,233)',borderBottomWidth:1*em}}
														   onPress={this.onChangeTypeIndex.bind(this,idx + 3)}>
											<Text style={{width:'100%',textAlign:'center',fontSize:20*em}}>{val.name}</Text>
										</TouchableOpacity>)}
								</View>
							)
						})
					}
				</View>
				<View style={{height:200*em}}/>
			</ScrollView>
		)
	}
	render_goodsGroup(){
		return(
			<View>
				{this.state.selectedTypeIndex < 3 ?
					<View style={{flexDirection:'row',width:'100%',height:80*em,paddingLeft:10*em,backgroundColor:'#fff'}}>
						<Text style={{fontSize:20*em,marginTop:24*em,color:'#444'}}>{this.state.typeGroupContent[this.state.selectedTypeIndex].label}</Text>
						<Text style={{fontSize:13*em,marginTop:33*em,color:'#888'}}>您买过的，常用过的</Text>
					</View>
					:<View style={{width:'100%',height:80*em}}/>}
				<ScrollView style={{height:800*em}} showsVerticalScrollIndicator={false}>
					{this.state.goodGroupContent.map((item,index)=>{
						return(
							<View  key={index} style={{flexDirection:'row',width:'100%',height:120*em,marginLeft: 20*em}}>
								<TouchableOpacity onPress={() => this.setState({isModalVisible: true})}>
									<Image source={item.imagePath} style={{height:110*em,width:110*em}} resizeMode={'cover'}/>
								</TouchableOpacity>
								<View style={{flexDirection:'column',marginLeft:20*em}}>
									<Text style={{color:'#000'}}>{item.goodName}</Text>
									<Text style={{fontSize:20*em}}>净含量 ：{item.mass}</Text>
									<View style={{flexDirection:'row'}}>
										<Text style={{fontSize:15*em,color:'red',marginTop:15*em}}>￥</Text>
										<Text style={{fontSize:30*em,color:'red'}}>{item.price}</Text>
									</View>
								</View>
								{item.option === 1 ?
									<View style={{flexDirection:'row',width:'100%'}}>
										{
											item.amount === 0 ?
												<TouchableOpacity style={{justifyContent: 'center', marginLeft: 50 * em}} onPress={this.buyGood.bind(this,item.goodName)}>
													<View style={[headerStyles.rightCallBack, {
														justifyContent: 'center',
														alignItems: 'center'
													}]}>
														<Image source={require('../../images/Service/icon-plus.png')}
															   style={headerStyles.plusbutton} resizeMode="cover"/>
													</View>
												</TouchableOpacity> :
												<View style={{flexDirection:'row',width:100*em,marginLeft:0*em}}>
													<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.sellGood.bind(this,item.goodName)}>
														<View style={[headerStyles.rightCallBack, {
															justifyContent: 'center',
															alignItems: 'center'
														}]}>
															<Image source={require('../../images/Service/icon-minus.png')}
																   style={headerStyles.plusbutton} resizeMode="cover"/>
														</View>
													</TouchableOpacity>
													<Text style={{marginTop:40*em}}>{item.amount}</Text>
													<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.buyGood.bind(this,item.goodName)}>
														<View style={[headerStyles.rightCallBack, {
															justifyContent: 'center',
															alignItems: 'center'
														}]}>
															<Image source={require('../../images/Service/icon-plus.png')}
																   style={headerStyles.plusbutton} resizeMode="cover"/>
														</View>
													</TouchableOpacity>
												</View>
										}
										<TouchableOpacity style={{justifyContent: 'center', marginLeft: 60 * em}} onPress={this.change_optionGoodModal.bind(this,item.goodName)}>
											<View style={[headerStyles.rightCallBack, {
														justifyContent: 'center',
														alignItems: 'center'
													}]}>
												<Image source={require('../../images/Service/icon-option.png')}
													   style={{width: 100 * em, height: 40 * em}} resizeMode="cover"/>
											</View>
										</TouchableOpacity>
									</View>
									: ( item.amount === 0 ?
										<TouchableOpacity style={{justifyContent: 'center', marginLeft: 180 * em}} onPress={this.buyGood.bind(this,item.goodName)}>
											<View style={[headerStyles.rightCallBack, {
												justifyContent: 'center',
												alignItems: 'center'
											}]}>
												<Image source={require('../../images/Service/icon-plus.png')}
													   style={headerStyles.plusbutton} resizeMode="cover"/>
											</View>
										</TouchableOpacity> :
											<View style={{flexDirection:'row',width:100*em,marginLeft:110*em}}>
												<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.sellGood.bind(this,item.goodName)}>
													<View style={[headerStyles.rightCallBack, {
														justifyContent: 'center',
														alignItems: 'center'
													}]}>
														<Image source={require('../../images/Service/icon-minus.png')}
															   style={headerStyles.plusbutton} resizeMode="cover"/>
													</View>
												</TouchableOpacity>
												<Text style={{marginTop:40*em}}>{item.amount}</Text>
												<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.buyGood.bind(this,item.goodName)}>
													<View style={[headerStyles.rightCallBack, {
														justifyContent: 'center',
														alignItems: 'center'
													}]}>
														<Image source={require('../../images/Service/icon-plus.png')}
															   style={headerStyles.plusbutton} resizeMode="cover"/>
													</View>
												</TouchableOpacity>
											</View>
									)
								}
							</View>
						)
					})}
					<View style={{height:300*em}}/>
				</ScrollView>
			</View>
		)
	}
	change_totalBuyModal(){
		this.state.totalBuyModal === true ? this.state.totalBuyModal = false : this.state.totalBuyModal = true
		this.forceUpdate();
	}
	render_totalBuyModal(){
		return(
			this.state.totalBuyModal ?
				<Modal isVisible={true} style={{marginLeft:0,width:700*em}} onBackdropPress={this.change_totalBuyModal.bind(this)}>
					<View style={{backgroundColor:'#fff',marginTop:400*em,width:650*em,height:640*em}}>
						<View style={{flexDirection:'row',height:50*em,backgroundColor:'rgb(245,245,245)'}}>
							<Text style={{marginLeft:30*em,fontSize:20*em,marginTop:10*em}}>已选商品</Text>
							<View style={{width:100*em,height:50*em,marginLeft:400*em}}>
								<TouchableOpacity onPress={this.sellAllGood.bind(this)} style={{flexDirection:'row'}}>
									<Image source={require('../../images/Service/deleteAll.png')} style={{ width:21*em,height:20*em,marginTop:10*em}}resizeMode={'cover'}/>
									<Text style={{color:'rgb(114,114,114)',marginLeft:10*em,fontSize:20*em,marginTop:5*em}}>清空</Text>
								</TouchableOpacity>
							</View>
						</View>
						<ScrollView style={{height:400*em}} showsVerticalScrollIndicator={false}>
						{this.state.goodGroupContent.map((item,index) => {
							return(
								item.amount !== 0 ?
								<ScrollView key={index}  horizontal={true} showsHorizontalScrollIndicator={false} style={{width:630*em,height:100*em,borderBottomWidth: 1*em,borderBottomColor:'rgb(227,227,227)'}}>
									<View style={{width:700*em}}>
										<View style={{marginLeft:20*em,marginTop:20*em,width:200*em}}>
											<Text style={{fontSize:25*em,color:'#000'}}>{item.goodName}</Text>
											<Text style={{fontSize:18*em}}>麻辣</Text>
										</View>
										<View style={{marginLeft:400*em,marginTop:-60*em,width:500*em}}>
											{item.amount === 0 ?
												<TouchableOpacity style={{justifyContent: 'center', marginLeft: 180 * em}} onPress={this.buyGood.bind(this,item.goodName)}>
													<View style={[headerStyles.rightCallBack, {
														justifyContent: 'center',
														alignItems: 'center'
													}]}>
														<Image source={require('../../images/Service/icon-plus.png')}
															   style={headerStyles.plusbutton} resizeMode="cover"/>
													</View>
												</TouchableOpacity> :
												<View style={{flexDirection:'row',width:200*em,marginLeft:110*em}}>
													<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.sellGood.bind(this,item.goodName)}>
														<View style={[headerStyles.rightCallBack, {
															justifyContent: 'center',
															alignItems: 'center'
														}]}>
															<Image source={require('../../images/Service/icon-minus.png')}
																   style={headerStyles.plusbutton} resizeMode="cover"/>
														</View>
													</TouchableOpacity>
													<Text style={{marginTop:10*em}}>{item.amount}</Text>
													<TouchableOpacity style={{justifyContent: 'center'}} onPress={this.buyGood.bind(this,item.goodName)}>
														<View style={[headerStyles.rightCallBack, {
															justifyContent: 'center',
															alignItems: 'center'
														}]}>
															<Image source={require('../../images/Service/icon-plus.png')}
																   style={headerStyles.plusbutton} resizeMode="cover"/>
														</View>
													</TouchableOpacity>
												</View>}
										</View>
										<View style={{position:'absolute',left:370*em,top:20*em}}>
											<Text style={{fontSize:30*em,color:'#f00'}}>￥25</Text>
										</View>
									</View>
									<TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:100*em,height:100*em,backgroundColor:'#f00'}}
									onPress={this.sellOneAllGood.bind(this,item.goodName)}>
										<Text style={{color:'#fff',fontSize:30*em}}>删除</Text>
									</TouchableOpacity>
								</ScrollView>:null
							)
						})}
						</ScrollView>
					</View>
					<View style={{backgroundColor:'rgb(247,247,247)',marginTop:0,width:'120%',height:60*em}}/>
				</Modal>:null
		)
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<TopBarWithSearch searchText="搜索商品" onBack={this.goBack.bind(this)} onSearch={this.goTo.bind(this, 'category_search')}/>
				<View style={headerStyles.container}>
					<View style={[headerStyles.flexRow, headerStyles.justBetween]}>
						<View style={headerStyles.flexRow}>
							<TouchableOpacity onPress={this.gotoCateInfo.bind(this)}>
								<Image source={require('../../images/Service/shop.png')} style={headerStyles.mainImg} resizeMode="cover"/>
							</TouchableOpacity>
							<View style={[headerStyles.justBetween, {paddingBottom: 7*em, paddingTop: 3*em, marginLeft: 20*em}]}>
								<Text style={headerStyles.title}>万达生鲜超市</Text>
								<Text style={headerStyles.detail}>月售262  起送10元</Text>
							</View>
						</View>
						<TouchableOpacity style={{justifyContent: 'center'}}>
							<View style={[headerStyles.rightCallBack, {justifyContent: 'center', alignItems: 'center'}]}>
								<Image source={require('../../images/Service/phone.png')} style={headerStyles.rightCall} resizeMode="cover"/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
					<View>
						<SliderTabBar  style={{marginTop:-80*em}} onClickMainItem={this.onClickMainItem.bind(this)} data={this.state.categories} selected={this.state.selectedIndex}/>
						<View style={[bodyStyles.flexRow,{position:'absolute',left:0,top:70*em,backgroundColor:'#fff'}]}>
							<View style={bodyStyles.typeGroup}>
								{this.render_typeGroupComponent()}
							</View>
							<View style={bodyStyles.goodsGroup}>
								{this.render_goodsGroup()}
							</View>
							{this.state.amountBuyGood === 0 ?
								<View style={{position:'absolute',left:20*em,top:710*em,flexDirection:'row',width:'96%',height:78*em}}>
									<Image source={require('../../images/Service/buyoff.png')} style={{width:'100%',height:90*em}} resizeMode={'cover'}/>
								</View>
								:
								<View style={{position:'absolute',left:20*em,top:710*em,flexDirection:'row',width:'96%',height:78*em}}>
									<View style={{width:'75%',backgroundColor:'rgb(69,69,69)',borderTopLeftRadius:10*em,borderBottomLeftRadius:10*em,marginRight:-3*em}}>
										<TouchableOpacity style={{position:'absolute',left:30*em,top:-10*em, width: 80*em,height:80*em}} onPress={this.change_totalBuyModal.bind(this)}>
											<Image source={require('../../images/Service/smileman.png')} style={{width: 80*em,height:80*em}} resizeMode={'cover'}/>
										</TouchableOpacity>
										<Image source={require('../../images/Service/goodNumBack.png')} style={{marginLeft:100*em,marginTop:15*em, width: 23*em,height:23*em}} resizeMode={'cover'}/>
										<Text style={{position:'absolute',left:106*em,top:15*em,color:'#fff',fontSize:15*em}}>{this.state.amountBuyGood}</Text>
										<Text style={{position:'absolute',left:130*em,top:7*em,color:'#fff',fontSize:30*em}}>￥25</Text>
										<Text style={{position:'absolute',left:200*em,top:15*em,color:'rgb(148,148,148)',fontSize:20*em,textDecorationLine:'line-through'}}>￥28</Text>
										<Text style={{position:'absolute',left:130*em,top:47*em,color:'rgb(148,148,148)',fontSize:15*em}}>可使用￥3积分</Text>
									</View>
									<TouchableOpacity style={{width:'25%'}} onPress={this.gotoPaydone.bind(this)}>
										<Image source={require('../../images/Service/buyback.png')} style={{ width:'100%',height:86*em}} resizeMode={'cover'}/>
										<Text style={{position:'absolute',left:35*em,top:15*em,color:'#000'}}>去结算</Text>
									</TouchableOpacity>
								</View>}
						</View>
						{this.render_totalBuyModal()}
					{this.render_optionModal()}
						<Modal
							animationType="slide"
							transparent={true}
							isVisible={this.state.isModalVisible}
							onBackdropPress={this.onClose.bind(this)}
							style={{justifyContent:'center'}}
						>
							<IndicatorViewPager style={{backgroundColor:'rgba(0,0,0,0)', width:600*em, height: 600*em}} indicator={this._renderDotIndicator()}>
								<View style={{justifyContent:'center', alignItems:'center'}}>
									<TouchableOpacity style={{marginBottom:-30*em, zIndex:1}} onPress={this.onClose.bind(this)}>
										<Image source={require('../../images/Service/close_modal.png')} style={{marginLeft:450*em, width:60*em, height:60*em}}/>
									</TouchableOpacity>
									<Image source={require('../../images/Service/good_modal.png')} style={{width:450*em, height:450*em}}/>
								</View>
								<View style={{justifyContent:'center', alignItems:'center'}}>
									<TouchableOpacity style={{marginBottom:-30*em, zIndex:1}} onPress={this.onClose.bind(this)}>
										<Image source={require('../../images/Service/close_modal.png')} style={{marginLeft:450*em, width:60*em, height:60*em}}/>
									</TouchableOpacity>
									<Image source={require('../../images/Service/good_modal.png')} style={{width:450*em, height:450*em}}/>
								</View>
								<View style={{justifyContent:'center', alignItems:'center'}}>
									<TouchableOpacity style={{marginBottom:-30*em, zIndex:1}} onPress={this.onClose.bind(this)}>
										<Image source={require('../../images/Service/close_modal.png')} style={{marginLeft:450*em, width:60*em, height:60*em}}/>
									</TouchableOpacity>
									<Image source={require('../../images/Service/good_modal.png')} style={{width:450*em, height:450*em}}/>
								</View>
								<View style={{justifyContent:'center', alignItems:'center'}}>
									<TouchableOpacity style={{marginBottom:-30*em, zIndex:1}} onPress={this.onClose.bind(this)}>
										<Image source={require('../../images/Service/close_modal.png')} style={{marginLeft:450*em, width:60*em, height:60*em}}/>
									</TouchableOpacity>
									<Image source={require('../../images/Service/good_modal.png')} style={{width:450*em, height:450*em}}/>
								</View>
							</IndicatorViewPager>
						</Modal>
					</View>
			</View>
		)
	}
}

export default connect(state=>({
	categoryInfo : state.serviceReducer.categoryInfo,
	selectedCategory : state.serviceReducer.selectedCategory,
	underCategory: state.serviceReducer.underCategory,
	categoryId:state.serviceReducer.categoryId

}), (dispatch) => ({

}))(Scene)

