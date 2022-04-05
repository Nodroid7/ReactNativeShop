import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TabBar} from '../../components/tabbar'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {BottomNavBarOrder} from "../../components/bottom-nav-bar-order";

class Scene extends Component{
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    constructor() {
        super();
        this.state = {
            content : [{
                name: '金基范',
                phone:'13944390031',
                position:'吉林省延边朝鲜族自治州延吉市建工街道威远城1 1号楼1单元801',
            },{
                name: '金基范',
                phone:'13944390031',
                position:'吉林省延边朝鲜族自治州延吉市建工街道威远城1 1号楼1单元801',
            },{
                name: '金基范',
                phone:'13944390031',
                position:'吉林省延边朝鲜族自治州延吉市建工街道威远城1 1号楼1单元801',
            }],
            content_1:[{
                title:'4斤装洗衣液',
                commit:'订单已完成',
                time:'支付金额：',
                percent:'积分',
                price:'￥ 39.5'
            }],
            select:null,
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
    setSelect = (id) =>{
        this.setState({select: id});
    };
    gotoOrderFinish= ()=>{
      this.props.navigation.navigate('myaccount/goods-order-finish');
    };
    render(){
        let {content_1} = this.state;
        const buttons = [{
            label:'返回',
            normalImage:require('../../images/8-4/bottom-bar.png'),
            action:this.gotoBack.bind()
        },{
            label:'立即支付',
            action:this.gotoOrderFinish.bind()
        }];
        return(
            <View style={{flex:1,backgroundColor: 'rgb(246,246,246)'}}>
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:25*em,marginBottom: 12*em,}}>
                    <Image source={require('../../images/8-4/top-symbol.png')} style={{width: 30*em,height:22*em,marginLeft:15*em,marginRight:10*em}} resizeMode={'contain'}/>
                    <Text style={{color:'rgb(52,52,52)',fontWeight:'bold'}}>选择地址</Text>
                </View>
                {
                    this.state.content.map((item,index)=>{
                        return(
                            <View  key={index}>
                            {
                                this.state.select === index ?
                                    (
                                        <TouchableOpacity onPress={this.setSelect.bind(this,index)}>
                                            <View style={{flexDirection:'column',backgroundColor:'rgb(255,255,255)',marginBottom:10*em}}>
                                                <View style={{flexDirection:'row',padding:15*em}}>
                                                    <View style={{flexDirection:'column',width:550*em}}>
                                                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10*em}}>
                                                            <Text style={{color:'rgb(123,123,123)'}}>收货人：<Text style={{color: 'rgb(52,52,52)'}}>{item.name}</Text></Text>
                                                            <Text style={{color:'rgb(123,123,123)'}}>电话：<Text style={{color: 'rgb(52,52,52)'}}>{item.phone}</Text></Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{color:'rgb(123,123,123)'}}>收货地址：<Text style={{color: 'rgb(52,52,52)'}}>{item.position}</Text></Text>
                                                        </View>
                                                    </View>
                                                    <View style={{alignItems:'center',justifyContent:'center',width:50*em}}>
                                                        <Image source={require('../../images/8-4/on-button.png')} style={{width:20*em,height: 20*em,marginLeft: 30*em}}/>
                                                    </View>
                                                </View>
                                                <View>
                                                    <Image source={require('../../images/8-4/on-bottomline.png')}  style={{height:10*em,width:W}}/>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ):
                                        (
                                    <TouchableOpacity onPress={this.setSelect.bind(this,index)}>
                                        <View key={index} style={{flexDirection:'column',backgroundColor:'rgb(255,255,255)',marginBottom:10*em}}>
                                            <View style={{flexDirection:'row',padding:15*em}}>
                                                <View style={{flexDirection:'column',width:550*em}}>
                                                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10*em}}>
                                                        <Text style={{color:'rgb(123,123,123)'}}>收货人：<Text style={{color: 'rgb(52,52,52)'}}>{item.name}</Text></Text>
                                                        <Text style={{color:'rgb(123,123,123)'}}>电话：<Text style={{color: 'rgb(52,52,52)'}}>{item.phone}</Text></Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{color:'rgb(123,123,123)'}}>收货地址：<Text style={{color: 'rgb(52,52,52)'}}>{item.position}</Text></Text>
                                                    </View>
                                                </View>
                                                <View style={{alignItems:'center',justifyContent:'center',width:50*em}}>
                                                    <Image source={require('../../images/8-4/off-button.png')} style={{width:20*em,height: 20*em,marginLeft: 30*em}}/>
                                                </View>
                                            </View>
                                            <View>
                                                <Image source={require('../../images/8-4/off-bottomline.png')}  style={{height:10*em,width:W}}/>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                        )

                            }
                            </View>

                        )
                    })
                }
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:25*em,marginBottom: 12*em,}}>
                    <Image source={require('../../images/8-4/bottom-symbol.png')} style={{width: 30*em,height:22*em,marginLeft:15*em,marginRight:10*em}} resizeMode={'contain'}/>
                    <Text style={{color:'rgb(52,52,52)',fontWeight:'bold'}}>订单信息</Text>
                </View>
                <View style={{backgroundColor:'rgb(255,255,255)'}}>
                    <View  style={{width:600*em,padding:15*em}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',borderBottomColor:'rgb(236,236,236)',borderBottomWidth:2*em,paddingBottom:20*em}}>
                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <View style={{width:80*em,height:80*em,backgroundColor:'rgb(255,255,255)', borderWidth: 2*em, borderColor:'rgb(225,225,225)',borderRadius:3*em}}>
                                    <Image source={require('../../images/8-3/shoes.png')} style={{width:'100%',height:'100%'}} resizeMode={'cover'}/>
                                </View>
                                <Text style={{marginLeft: 15*em,color:'rgb(38,38,38)'}}>{content_1[0].title}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop:10*em,marginBottom:10*em,alignItems:'center'}}>
                            <Text style={{fontSize:20*em}}>{content_1[0].time}</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'rgb(64,64,64)'}}>{content_1[0].percent} <Text style={{color:'red'}}>20</Text> 分</Text>
                                <Image source={require('../../images/8-3/+.png')} style={{width:20*em,height:20*em,marginLeft:15*em}}/>
                                <Text style={{marginLeft:6*em,color:'rgb(38,38,38)'}}>{content_1[0].price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <BottomNavBarOrder buttons={buttons} />
            </View>
        )
    }

}
export default Scene;
