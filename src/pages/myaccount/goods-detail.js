import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TabBar} from '../../components/tabbar'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {Colorbutton} from '../../components/colorbutton';

class Scene extends Component{
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    constructor() {
        super();
        this.state = {

        }
    }
    gotogoodsorderapart = () =>{
        this.props.navigation.navigate('myaccount/goods-order-apart');
    };
    gotogoodspage = () =>{
        this.props.navigation.navigate('myaccount/goods-page');
    };
    render(){
        const content = [{
           action: this.gotogoodsorderapart.bind(this),
           label: '兑换并结算'
        }];
        return(
            <View style={{flex:1,backgroundColor:'rgb(246,246,246)'}}>
                <View style={{width:W,height:320*em}}>
                    <Image source={require('../../images/8-2/mainpicture.png')}  style={{width:'100%',height:'100%',position:'relative'}} resizeMode={'cover'}/>
                    <TouchableOpacity style={{position:'absolute',marginLeft:20*em,marginTop:20*em}} onPress={this.gotogoodspage.bind(this)}>
                        <Image source={require('../../images/8-2/backsymbol.png')} style={{width:65*em,height:65*em,}} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'rgb(255,255,255)'}}>
                    <View style={{flexDirection:'column',marginTop:18*em,marginLeft:15*em,marginBottom:25*em}}>
                        <Text style={{fontSize:25*em,fontWeight:'bold',color:'rgb(38,38,38)',marginBottom:15*em}}>德国进口纯手工牛皮鞋</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'red',marginRight:5*em}}>20</Text><Text style={{color:'rgb(154,154,154)'}}>分</Text>
                            <View style={{flexDirection:'row',backgroundColor:'rgb(0,183,238)',marginLeft:15*em,borderRadius:3*em}}>
                                <Text style={{fontSize:17*em,padding: 2*em,color:'white'}}> + 50</Text>
                                <Text style={{fontSize:17*em,padding: 2*em,color:'white'}}>元</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'rgb(255,255,255)',marginTop:18*em,marginBottom:25*em,padding:15*em}}>
                    <Text style={{fontSize:25*em,fontWeight:'bold',color:'rgb(38,38,38)',marginBottom:15*em}}>商品详情</Text>
                    <View>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容，商品内容详情内容， </Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容</Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容</Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容，商品内容详情内容， </Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容</Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容</Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容，商品内容详情内容， </Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容，商品内容详情内容</Text>
                        <Text style={{color:'rgb(38,38,38)',fontSize:20*em}}>商品内容详情内容</Text>
                    </View>
                </View>
                <Colorbutton colorbutton={content}/>
            </View>
        )
    }
}
export default Scene;
