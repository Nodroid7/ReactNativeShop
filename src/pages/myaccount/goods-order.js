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
            },{
                title:'4斤装洗衣液',
                commit:'已发货',
                time:'下单时间：2018-12-20 12:11:10',
                percent:'积分',
                price:'￥ 39.5'
            },{
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
   deleteItem = (id) => {
        let {content} = this.state;
        content.splice(id, 1);
        // this.state.content = content;
        // alert(content);
        // this.forceUpdate();
        this.setState({content:content});
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
                {
                    this.state.content.map((item, index)=>{
                    return(
                        <View key={index}>
                            <View style={{alignItems:'center',}}>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                            style={{backgroundColor:'rgb(255,255,255)', marginLeft:15*em, marginTop:15*em,}}>
                                    <View  style={{width:600*em,padding:15*em}}>
                                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',borderBottomColor:'rgb(236,236,236)',borderBottomWidth:2*em,paddingBottom:20*em}}>
                                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                                <View style={{width:80*em,height:80*em,backgroundColor:'rgb(255,255,255)', borderWidth: 2*em, borderColor:'rgb(225,225,225)',borderRadius:3*em}}>
                                                    <Image source={require('../../images/8-3/shoes.png')} style={{width:'100%',height:'100%'}} resizeMode={'cover'}/>
                                                </View>
                                                <Text style={{marginLeft: 15*em,color:'rgb(38,38,38)'}}>{item.title}</Text>
                                            </View>
                                            <Text style={item.commit==='已发货'? {color:'rgb(88,181,238)'}: {}}>{item.commit}</Text>
                                        </View>
                                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10*em,marginBottom:10*em,alignItems:'center'}}>
                                            <Text style={{fontSize:20*em}}>{item.time}</Text>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Text style={{color:'rgb(64,64,64)'}}>{item.percent} <Text style={{color:'red'}}>20</Text> 分</Text>
                                                <Image source={require('../../images/8-3/+.png')} style={{width:20*em,height:20*em,marginLeft:15*em}}/>
                                                <Text style={{marginLeft:6*em,color:'rgb(38,38,38)'}}>{item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{backgroundColor:'rgb(246,246,246)',marginLeft:10*em,width:20*em}}/>
                                    <TouchableOpacity style={{backgroundColor:'rgb(230,0,18)',padding: 30*em, alignItems:'center',justifyContent:'center',width:130*em}} onPress={this.deleteItem.bind(this,index)}>
                                        <Text style={{fontSize:20*em,fontWeight:'bold',color:'white',}}>删除</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>

                    )
                })
                }
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }

}
export default Scene;
