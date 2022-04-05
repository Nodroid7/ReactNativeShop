import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import {TopBarWithSearch} from "../../components/topbar"
import {SliderTabBar} from "../../components/sliderTabBar"
import {em, W} from '../../config/uivar'
import {BottomBar} from "../../components/bottombar";
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
            bottom_status:1,
            top_tab_status:0
        }
    }
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
        }
    };
    changeBottomStatus = (id) => {
        this.setState({bottom_status:id});
    };
    changeTopTabStatus = (id) => {
        this.setState({top_tab_status:id});
    };
    render() {
        const buttons = [{
            label: '首页',
            normalImage: require('../../images/shouye.png'),
            chosenImage: require('../../images/shouye-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'index')
        }, {
            label: '订单',
            normalImage: require('../../images/dingdan.png'),
            chosenImage: require('../../images/dingdan-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'all_orders')

        },{
            label: '我的',
            normalImage: require('../../images/wode.png'),
            chosenImage: require('../../images/wode-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'myaccount/index')
        }
        ];
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
        const order_items = [{
            location: '威远城吉大超市',
            status: '订单已完成',
            product_name: '可口可乐等4件商品',
            price: '￥ 39.5',
            reorder_button: '再来一单',
            confirm_button: '确认收货',
            estimate_button: '评价得39.5积分'
        },{
            location: '威远城吉大超市',
            status: '订单已完成',
            product_name: '可口可乐等4件商品',
            price: '￥ 39.5',
            reorder_button: '再来一单',
            confirm_button: '确认收货',
            estimate_button: '评价得39.5积分'
        },{
            location: '威远城吉大超市',
            status: '订单已完成',
            product_name: '可口可乐等4件商品',
            price: '￥ 39.5',
            reorder_button: '再来一单',
            confirm_button: '确认收货',
            estimate_button: '评价得39.5积分'
        },{
            location: '威远城吉大超市',
            status: '订单已完成',
            product_name: '可口可乐等4件商品',
            price: '￥ 39.5',
            reorder_button: '再来一单',
            confirm_button: '确认收货',
            estimate_button: '评价得39.5积分'
        }];
        return (
            <View style={{flex:1}}>
                <TopTabBar chosenButton={this.state.top_tab_status} buttons={topTabButtons} />
                <ScrollView style={{marginTop:60*em}}>
                    {
                        order_items.map((item, index) => {
                            return (
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} key={index} >
                                    <View style={{width:W, backgroundColor:'#fff', margin:15*em, flexDirection:'row', padding:15*em, borderColor:'#dfdfdf', borderWidth:1*em}}>
                                        <View style={{width:'15%', alignItems:'flex-start'}}>
                                            <Image source={require('../../images/dingdan_image.png')} style={{width:60*em, height:60*em}} resizeMode="cover"/>
                                        </View>
                                        <View style={{width:'85%'}}>
                                            <View style={{padding:15*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1*em, borderBottomColor:'rgb(236, 236, 236)', marginRight:15*em}}>
                                                <Text style={{color:'#000', fontSize:20*em}}>{item.location}</Text>
                                                <Text style={{fontSize:20*em, color:'rgb(84, 84, 84)'}}>{item.status}</Text>
                                            </View>
                                            <View style={{padding:15*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginRight:15*em}}>
                                                <Text style={{fontSize:20*em, color:'rgb(84, 84, 84)'}}>{item.product_name}</Text>
                                                <Text style={{fontSize:20*em, color:'rgb(38, 38, 38)'}}>{item.price}</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', marginRight:15*em}}>
                                                <TouchableOpacity style={{padding:15*em, marginLeft:10*em, borderColor:'rgb(216, 216, 216)', borderWidth:1*em}}>
                                                    <Text style={{color:'rgb(59, 59, 59)', fontSize:19*em}}>{item.reorder_button}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{padding:15*em, marginLeft:10*em, backgroundColor:'rgb(255, 202, 76)'}}>
                                                    <Text style={{color:'rgb(38, 38, 38)', fontSize:19*em}}>{item.confirm_button}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{padding:15*em, marginLeft:10*em, backgroundColor:'rgb(255, 248, 231)', borderColor:'rgb(255, 184, 62)', borderWidth:1*em}}>
                                                    <Text style={{color:'rgb(255, 178, 47)', fontSize:19*em}}>{item.estimate_button}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{marginTop:15*em, height: 206*em, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f00'}}>
                                        <Text style={{textAlign:'center', width:120*em, fontSize: 22*em, color: '#fff'}}>删除</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        })
                    }
                </ScrollView>
                <BottomBar chosenButton={this.state.bottom_status} buttons={buttons} />
            </View>
        )
    }
}
export default Scene;
