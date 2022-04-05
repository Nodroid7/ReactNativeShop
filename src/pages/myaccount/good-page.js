import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TabBar} from '../../components/tabbar'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {API_BASE_URL} from "../../config/app";
import {SERVER_BASE_URL} from "../../config/app";

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
            tab_status : 0,
            processData :{},
            content:[],
            content1:[],
            content2:[],
        }
    }
    componentWillMount() {
        var self = this;
        axios.get(API_BASE_URL+'myaccount/my_order/show_order',{
                user_id:1
            }
        ).then(function (res) {
            const {data} = res;
            if(data.status=='success'){
                let data = res.data.product;
                var content = [];
                for( i=0;i<data.length;i++){
                    content.push({img_url:data[i].url, number:data[i].percent, add_price:' + 50',commit:'加厚增压花洒浴室... 副本 2'});
                }
                self.setState({
                    content:content,
                    content1:content,
                    content2:content,
                });
            }
            else if(data.status == 'false'){

            }
        });
    }
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    goto = () => {
    };
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };
    gotoorder = () =>{
        this.props.navigation.navigate('myaccount/goods-order');
    };
    gotodetail = () =>{
        this.props.navigation.navigate('myaccount/goods-detail');
    };

    changeNavStatus = (id) => {
        this.setState({tab_status: id});
    };
    render_component = (content) => {
        return(
            <ScrollView style={{width:W,height:640*em,backgroundColor: '#fff'}}>
                <View style={{flexWrap: 'wrap', flexDirection:'row',marginBottom:5*em}}>
                    {   content.map((item,index)=>{
                        return(
                            <View key = {index} style={{width:190*em,backgroundColor: '#fff',marginTop:15*em,marginBottom: 15*em,marginLeft:17*em}}>
                                <View>
                                    <TouchableOpacity style={{width:200*em, height:180*em}} onPress={this.gotodetail.bind(this,index)}>
                                        <Image source={{uri:SERVER_BASE_URL+ 'image/' + item.img_url}} style={{width:'100%',height:180*em}} resizeMode={'contain'}/>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{fontSize:19*em, color:'#313131',marginBottom:3*em,marginTop:10*em,marginLeft:5*em}}>
                                            {item.commit.length < 8
                                                ?item.commit:
                                                item.commit.slice(0,8)+'...'}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:5*em}}>
                                        <Text style={{fontSize:19*em,color:'red'}}>{item.number}</Text><Text style={{fontSize:18*em,marginLeft:3*em,marginRight:5*em}}>分</Text>
                                        <View style={{flexDirection:'row',backgroundColor:'rgb(0,183,238)',borderRadius:6*em}}>
                                            <Text style={{fontSize:17*em,padding: 2*em,color:'white'}}>{item.add_price}</Text>
                                            <Text style={{fontSize:17*em,padding: 2*em,color:'white'}}>元</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
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
        const tabs = [{
            label: '全部',
            action: this.changeNavStatus.bind(this, 0),
            screen: this.render_component(this.state.content)
        }, {
            label: '积分',
            action: this.changeNavStatus.bind(this, 1),
            screen: this.render_component(this.state.content1)
        },{
            label: '加购',
            action: this.changeNavStatus.bind(this, 2),
            screen: this.render_component(this.state.content2)
        }];
        return (
            <View style={{flex:1}}>
                <View style={{width:W}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:80*em, padding:15*em,backgroundColor:'white'}}>
                        <View style={{flexDirection:'row', alignItems:'center', }}>
                            <Image source={require('../../images/8-1/top-1.png')} style={{width:40*em, height:40*em, marginRight:5*em}}/>
                            <Text style={{fontSize:22*em}}>我的积分:</Text>
                            <Text style={{fontWeight:'bold',fontSize:28*em,color:'#565656'}}>100</Text>
                        </View>
                        <TouchableOpacity onPress={this.gotoorder.bind(this)}>
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <Image source={require('../../images/8-1/top-2.png')} style={{width:40*em, height:40*em, marginRight:5*em}}/>
                                <Text style={{fontSize:22*em}}>订单</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',height:220*em, justifyContent: 'center',}}>
                        <Image source={require('../../images/8-1/body-1.png')} style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View style={{flexDirection:'row',height:80*em,backgroundColor:'rgb(255,255,255)'}}>
                        {/*<View style={{width:'33.33%',justifyContent:'space-between', alignItems:'center',fontsize:10*em,paddingTop:25*em,paddingBottom:20*em,borderBottomColor:'#f9ab10',borderBottomWidth:2*em}}>*/}
                        {/*<Text style={{color:'black'}}>全部</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width:'33.33%',justifyContent:'space-between', alignItems:'center',fontsize:10*em,paddingTop:25*em,paddingBottom:20*em}}>*/}
                        {/*<Text>积分</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width:'33.33%',justifyContent:'space-between', alignItems:'center',fontsize:10*em,paddingTop:25*em,paddingBottom:20*em}}>*/}
                        {/*<Text>加购</Text>*/}
                        {/*</View>*/}
                        <TabBar tabs={tabs} chosenButton={this.state.tab_status} />
                    </View>
                </View>

                <BottomNavBar buttons={buttons} />
            </View>
        )
    }
}
export default Scene;
// const style = StyleSheet.create({
//     record:{
//         paddingLeft:20*em, paddingRight:20*em, paddingTop:25*em, paddingBottom:25*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'
//     }
// });