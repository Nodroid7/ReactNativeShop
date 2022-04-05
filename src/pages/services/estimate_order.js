import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, ImageBackground, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import {TopBarWithSearch} from "../../components/topbar"
import {SliderTabBar} from "../../components/sliderTabBar"
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TopTabBar} from "../../components/topTabBar"
import {PagerDotIndicator, IndicatorViewPager} from 'React-Native-ViewPager-master'
import Modal from 'react-native-modal'

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    constructor() {
        super();
        this.state = {
            top_tab_status : 2
        };
    }

    state = {
        star_num: 0,
        top_tab_status: 2
    };

    goTo = (data) => {
        switch (data) {
            case 'all_orders':
                this.props.navigation.navigate('services/' + data);
                break;
            case 'index':
                this.props.navigation.navigate('services/' + data);
                break;
            case 'myaccount/index':
                this.props.navigation.navigate(data);
                break;
            case 'estimate_order':
                this.props.navigation.navigate('services/' + data);
                break;
            case 'orderdetail':
                this.props.navigation.navigate('services/' + data);
                break;
        }
    };
    changeTopTabStatus = (id) => {
        this.setState({top_tab_status:id});
    };
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
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
        const topTabButtons = [{
            label: '全部订单',
            isRead: false,
            action: this.goTo.bind(this, 'all_orders')
        },{
            label: '待确认',
            isRead: false,
            action: this.goTo.bind(this, 'orderdetail')
        },{
            label: '待评价',
            isRead: false,
            action: this.goTo.bind(this, 'estimate_order')
        }];
        const stars = ['star1', 'star2', 'star3', 'star4', 'star5'];
        return(
            <View style={{flex:1}}>
                <TopTabBar chosenButton={this.state.top_tab_status} buttons={topTabButtons} />
                <View style={{backgroundColor:'#fff', marginLeft:15*em, marginRight:15*em, marginBottom:15*em, justifyContent:'center', alignItems:'center', marginTop:75*em}}>
                    <View style={{flexDirection:'row', alignItems:'center', padding:15*em, borderBottomWidth:1*em, borderBottomColor:'rgb(236, 236, 236)'}}>
                        <View style={{width:'15%', justifyContent:'center', alignItems:'center'}}>
                            <Image source={require('../../images/dingdan_image.png')} style={{width:65*em, height:65*em}}/>
                        </View>
                        <View style={{width:'85%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'rgb(38, 38, 38)'}}>威远城吉大超市</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Image source={require('../../images/Service/check_icon.png')} style={{width:15*em, height:15*em}}/>
                                <Text style={{color:'rgb(135, 135, 135)', fontSize:16*em, marginLeft:10*em}}>匿名评价</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:15*em, borderBottomWidth:1*em, borderBottomColor:'rgb(236, 236, 236)'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'rgb(38, 38, 38)'}}>商家</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', width:530*em, alignItems:'center'}}>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10*em}}>
                                <Image source={require('../../images/Service/unsatisfied.png')} style={{margin:10*em, width:90*em, height:90*em}} resizeMode="contain"/>
                                <Text style={{color:'rgb(135, 135, 135)'}}>不满意</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'center', padding:10*em}}>
                                <Image source={require('../../images/Service/satisfied.png')} style={{margin:10*em, width:90*em, height:90*em}} resizeMode="contain"/>
                                <Text style={{color:'rgb(135, 135, 135)'}}>满意</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center', margin:10*em}}>
                            <Text style={{color:'rgb(38, 38, 38)'}}>商品</Text>
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center', margin:10*em}}>
                            <Text style={{color:'rgb(135, 135, 135)'}}>“很差”</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', margin:10*em}}>
                            {
                                stars.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={{margin:10*em}} onPress={() => {this.setState({star_num:index})}}>
                                            {
                                                index <= this.state.star_num ?
                                                    <Image source={require('../../images/Service/star.png')} style={{width:55*em, height:55*em}}/>
                                                    :
                                                    <Image source={require('../../images/Service/black_star.png')} style={{width:55*em, height:55*em}}/>
                                            }
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                        <TextInput placeholder="请输入内容" style={{width:580*em, height:120*em, backgroundColor:'rgb(235, 235, 235)', color:'rgb(144, 144, 144)', margin:15*em}}>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:'rgb(255, 202, 76)', justifyContent:'center', alignItems:'center', padding:15*em, marginLeft:15*em, marginRight:15*em}}>
                    <Text style={{color:'rgb(38, 38, 38)', fontSize:20*em}}>提交</Text>
                </TouchableOpacity>
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }
}
export default Scene;