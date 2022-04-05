import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TabBar} from '../../components/tabbar'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Scene extends Component{
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    constructor() {
        super();
        this.state = {
            content:[{
                title:'4斤装洗衣液',
                commit:'订单已完成',
                time:'下单时间：2018-12-20 12:11:10',
                percent:'积分',
                price:'￥ 39.5'
            }]
        }
    }
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    goto = () => {
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
            <View style={{flex:1,backgroundColor:'rgb(246,246,246)'}}>
                <View style={{flexDirection:'column',width:W}}>
                    <View style={{flexDirection:'column',marginTop:30*em,alignItems:'center',justifyContent:'center',width:'100%'}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20*em,width:'100%'}}>
                            <Image source={require('../../images/8-5/check-symbol.png')} style={{width:50*em,height:50*em,marginRight:18*em}} resizeMode={'contain'}/>
                            <Text style={{fontWeight:'bold',fontSize:35*em,color:'rgb(38,38,38)'}}>恭喜，兑换成功</Text>
                        </View>
                        <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%'}}>
                            <Text style={{color:'rgb(64,64,64)',fontSize:20*em}}>感谢您对我要节约的信任，期待再次光临。</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'rgb(255,255,255)',padding:20*em,marginTop:30*em}}>
                        <Text style={{fontWeight:'bold',fontSize:24*em,color:'rgb(38,38,38)'}}>订单状态：订单已完成</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(255,255,255)',padding:20*em,marginTop:10*em}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',borderBottomColor:'rgb(236,236,236)',borderBottomWidth:2*em,paddingBottom:20*em}}>
                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <View style={{width:80*em,height:80*em,backgroundColor:'rgb(255,255,255)', borderWidth: 2*em, borderColor:'rgb(225,225,225)',borderRadius:5*em}}>
                                    <Image source={require('../../images/8-3/shoes.png')} style={{width:'100%',height:'100%'}} resizeMode={'cover'}/>
                                </View>
                                <Text style={{marginLeft: 15*em,color:'rgb(38,38,38)'}}>4斤装洗衣液</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',borderBottomColor:'rgb(236,236,236)',borderBottomWidth:2*em,paddingBottom:15*em,paddingTop:15*em}}>
                            <View style={{flexDirection:'row',alignItems:'center',marginBottom:15*em}}>
                                <Text style={{color:'rgb(110,110,110)'}}>支付金额： 积分 <Text style={{color:'red'}}>20</Text> 分</Text>
                                <Image source={require('../../images/8-3/+.png')} style={{width:20*em,height:20*em,marginLeft:15*em}}/>
                                <Text style={{marginLeft:6*em,color:'black'}}>￥ 39.5</Text>
                            </View>
                            <Text style={{alignItems:'center',marginBottom:15*em}}>订单编号：12345678901234567890 </Text>
                            <Text style={{alignItems:'center'}}>下单时间：2018-12-20 12:55:19</Text>
                        </View>
                        <View style={{flexDirection:'column',paddingTop:15*em}}>
                            <Text style={{marginBottom:15*em}}>收  货  人：金基范</Text>
                            <Text style={{alignItems:'center',marginBottom:15*em}}>电        话：13944390031</Text>
                            <Text style={{alignItems:'center'}}>收货地址：吉林省延边朝鲜族自治州延吉市建工街道威远城11号</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'rgb(255,255,255)',padding:20*em,marginTop:10*em}}>
                        <View style={{flexDirection:'column',marginBottom:20*em}}>
                            <Text style={{color:'rgb(38,38,38)'}}>商品详情</Text>
                        </View>
                        <Text>商品内容详情内容，商品内容详情内容</Text>
                        <Text>商品内容详情内容</Text>
                    </View>
                </View>
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }

}
export default Scene;
