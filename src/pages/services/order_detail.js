import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground,TouchableWithoutFeedback, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {em, W} from '../../config/uivar'
import {PagerDotIndicator, IndicatorViewPager} from 'React-Native-ViewPager-master'
import Modal from "react-native-modal";
export default class Scene extends  Component{
    static navigationOptions = {
        headerStyle:{
            display:'none'
        }
    };

    constructor(){
        super();
        this.state = {
            allowModalFirst:false,
            allowModalSecond:false,
            goodContent:[{
                goodName:'苹果',
                amount:10,
                price:11,
                active:true,
                imgPath:require('../../images/Service/apple.png')
            },{
                goodName:'可口可乐',
                amount:10,
                price:6,
                active:true,
                imgPath:require('../../images/Service/icon-可口可乐.png')
            },{
                goodName:'可口可乐',
                amount:10,
                price:6,
                active:false,
                imgPath:require('../../images/Service/icon-可口可乐2.png')
            },{
                goodName:'可口可乐(等4件)',
                amount:10,
                price:6,
                active:false,
                imgPath:require('../../images/Service/icon-可口可乐(等4件).png')
            }]
        };
    }
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    gotoBack = () => {
        this.props.navigation.goBack();
    };
    _renderDotIndicator(){
        return <PagerDotIndicator selectedDotStyle={{backgroundColor:'#000'}} pageCount={4} />;
    }
    change_allowModalFirst(){
        this.state.allowModalFirst === false ? this.state.allowModalFirst = true:this.state.allowModalFirst = false
        this.forceUpdate();
    }
    change_allowModalSecond(){
        this.state.allowModalSecond === false? this.state.allowModalSecond = true:this.state.allowModalSecond = false
        this.forceUpdate();
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
        return(
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{width:'94.5%',flexDirection:'column',backgroundColor:'#fff',marginLeft:20*em,marginTop:15*em}}>
                    <View style={{flexDirection:'row',height:80*em}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row',marginLeft:20*em,marginTop:20*em,alignItems:'center'}}>
                                <Image source={require('../../images/Service/order_detail_title_icon.png')} style={{width:21*em,height:21*em}} resizeMode={'cover'}/>
                                <Text style={{fontSize:21*em,color:'#000'}}>订单已完成</Text>
                            </View>
                            <View style={{marginTop:20*em,marginLeft:20*em}}>
                                <Text style={{fontSize:18*em,color:'rgb(117,117,117)'}}>感谢您对我要节约的信任，期待再次光临。</Text>
                            </View>
                        </View>
                        <Image source={require('../../images/Service/icon-avatar.png')} style={{marginLeft:170*em,marginTop:20*em,width:57*em,height:57*em}}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20*em,marginLeft:20*em,marginBottom:20*em}}>
                        <TouchableOpacity style={{height:40*em,borderColor:'rgb(216,216,216)',borderRadius:5*em,borderWidth:1*em,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'rgb(59,59,59)',margin:10*em,fontSize:20*em}}>再来一单</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:40*em,borderRadius:5*em,backgroundColor:'rgb(255,202,76)',marginLeft:30*em,justifyContent:'center',alignItems:'center'}}
                        onPress={this.change_allowModalFirst.bind(this)}>
                            <Text style={{color:'rgb(38,38,38)',margin:10*em,fontSize:20*em}}>确认收货</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:40*em,borderRadius:5*em,borderWidth:1*em,borderColor:'rgb(255,178,48)',backgroundColor:'rgb(255,248,231)',marginLeft:30*em,justifyContent:'center',alignItems:'center'}}
                        onPress={this.change_allowModalSecond.bind(this)}>
                            <Text style={{color:'rgb(255,178,48)',margin:10*em,fontSize:20*em}}>评价得39.5积分</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'94.5%',flexDirection:'row',backgroundColor:'#fff',marginLeft:20*em,marginTop:15*em}}>
                    <IndicatorViewPager style={{width:'100%',height:90*em}} indicator={this._renderDotIndicator()}>
                        <View style={{width:605*em,height:90*em,marginLeft:200*em,marginRight:200*em}}>
                            <Image source={require('../../images/Service/image-advertisement.png')} style={{width:605*em,height:90*em}} resizeMode={'stretch'}/>
                        </View>
                        <View style={{width:605*em,height:90*em,marginLeft:200*em,marginRight:200*em}}>
                            <Image source={require('../../images/Service/image-advertisement.png')} style={{width:605*em,height:90*em}} resizeMode={'stretch'}/>
                        </View >
                        <View style={{width:605*em,height:90*em,marginLeft:200*em,marginRight:200*em}}>
                            <Image source={require('../../images/Service/image-advertisement.png')} style={{width:605*em,height:90*em}}resizeMode={'stretch'}/>
                        </View>
                        <View style={{width:605*em,height:90*em,marginLeft:200*em,marginRight:200*em}}>
                            <Image source={require('../../images/Service/image-advertisement.png')} style={{width:605*em,height:90*em}}resizeMode={'stretch'} />
                        </View>
                    </IndicatorViewPager>
                </View>
                <View style={{width:'94.5%',flexDirection:'column',backgroundColor:'#fff',marginLeft:20*em,marginTop:15*em}}>
                    <View style={{flexDirection:'row',marginTop:10*em,marginLeft:20*em,marginRight:20*em,borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:40*em}}>
                        <Image source={require('../../images/Service/order_detail-middle_icon.png')} style={{width:15*em,height:18*em,marginLeft:20*em}} resizeMode={'cover'}/>
                        <Text style={{color:'#000',fontSize:21*em,marginLeft:20*em}}>订单信息</Text>
                    </View>
                    <View style={{flexDirection:'row',borderColor:'rgb(233,233,233)',marginRight:20*em,borderBottomWidth:1*em,alignItems:'center',marginLeft:20*em,height:50*em}}>
                        <Text style={{color:'rgb(155,155,155)',fontSize:21*em}}>订单号码</Text>
                        <Text style={{color:'rgb(88,88,88)',fontSize:21*em,marginLeft:170*em}}>3170 4560 4411 0138 4</Text>
                        <TouchableOpacity style={{width:70*em,height:30*em,borderRadius:2*em,borderColor:'#333',borderWidth:1*em,marginLeft:20*em,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20*em}}>复制</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',borderColor:'rgb(233,233,233)',marginRight:20*em,borderBottomWidth:1*em,alignItems:'center',marginLeft:20*em,height:50*em}}>
                        <Text style={{color:'rgb(155,155,155)',fontSize:21*em}}>下单时间</Text>
                        <Text style={{color:'rgb(88,88,88)',fontSize:21*em,marginLeft:280*em}}>2018-12-10 22:57:57</Text>
                    </View>
                    <View style={{flexDirection:'column',borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:80*em}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'rgb(155,155,155)',fontSize:21*em}}>配送地址</Text>
                            <Text style={{color:'rgb(88,88,88)',fontSize:21*em,marginLeft:220*em}}>金城成(先生)13944390031</Text>
                        </View>
                        <Text style={{color:'rgb(88,88,88)',fontSize:21*em,marginLeft:380*em}}>御翠园2号楼(1室)</Text>
                    </View>
                </View>
                <View style={{width:'94.5%',flexDirection:'column',backgroundColor:'#fff',marginLeft:20*em,marginTop:15*em}}>
                    <View style={{flexDirection:'row',marginTop:10*em,marginLeft:20*em,marginRight:20*em,borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:40*em}}>
                        <Image source={require('../../images/Service/order_detail-under_icon.png')} style={{width:24*em,height:18*em}} resizeMode={'cover'}/>
                        <Text style={{color:'#000',fontSize:21*em,marginLeft:20*em}}>威远吉大超市</Text>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginLeft:330*em}}>
                            <Image source={require('../../images/Service/pho.png')} style={{width:35*em,height:35*em}} resizeMode={'cover'}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{width:'94.5%',backgroundColor:'#fff',marginTop:15*em,height:200*em}} showsVerticalScrollIndicator={false}>
                        {
                            this.state.goodContent.map((item,index) => {
                                return(
                                    <View key={index}>
                                        <View style={{flexDirection:'row',marginTop:10*em,marginLeft:20*em,marginRight:20*em,borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:50*em}}>
                                            <Image source={item.imgPath} style={{width:40*em,height:40*em}}/>
                                            {item.active === true ?
                                                <Text style={{fontSize:20*em,color:'#000',marginLeft:20*em,width:100*em}}>{item.goodName}</Text>:
                                                <Text style={{fontSize:20*em,color:'rgb(187,187,187)',marginLeft:20*em,width:100*em}}>{item.goodName}</Text>
                                            }
                                            {item.active === true ?
                                                <Text style={{fontSize:15*em,color:'#666',marginLeft:240*em}}>x{item.amount}</Text>:
                                                <Text style={{fontSize:15*em,color:'rgb(187,187,187)',marginLeft:240*em}}>x{item.amount}</Text>}
                                            {item.active === true ?
                                                <Text style={{fontSize:20*em,color:'#000',marginLeft:80*em}}>￥{item.price}</Text>:
                                                <Text style={{fontSize:20*em,color:'rgb(187,187,187)',marginLeft:80*em,textDecorationLine:'line-through'}}>￥{item.price}</Text>
                                            }

                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{flexDirection:'row',marginTop:10*em,marginLeft:20*em,marginRight:20*em,borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:70*em}}>
                        <Image source={require('../../images/Service/icon-积.png')} style={{width:19*em,height:19*em}}/>
                        <Text style={{fontSize:20*em,color:'#000',marginLeft:20*em,width:60*em}}>积分 </Text>
                        <Text style={{fontSize:15*em,color:'#f00',marginLeft:0}}>10</Text>
                        <Text style={{fontSize:20*em,color:'#f00',marginLeft:400*em}}>-￥1</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10*em,marginLeft:20*em,marginRight:20*em,borderColor:'rgb(233,233,233)',borderBottomWidth:1*em,alignItems:'center',height:90*em}}>
                        <Text style={{fontSize:20*em,color:'#000',marginLeft:320*em,width:80*em}}>已优惠  </Text>
                        <Text style={{fontSize:15*em,color:'#f00',marginLeft:10*em}}>￥1</Text>
                        <Text style={{fontSize:20*em,color:'#f00',marginLeft:10*em}}>合计 </Text>
                        <Text style={{fontSize:28*em,color:'#000',marginLeft:10*em}}>￥22 </Text>
                    </View>
                </View>
                {
                    this.state.allowModalFirst === true ?
                        <Modal isVisible={true} style={{width:'100%',height:600*em,justifyContent:'center',alignItems:'center'}} onBackdropPress={this.change_allowModalFirst.bind(this)}>
                            <View style={{backgroundColor:'#fff',width:400*em,height:250*em,borderRadius:10*em,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <View style={{flexDirection:'column',height:200*em,justifyContent:'center',alignItems:'center',borderColor:'rgb(213,213,213)',borderBottomWidth:1*em}}>
                                    <Text style={{fontSize:20*em,color:'#000'}}>确认收货已成功</Text>
                                    <Text style={{fontSize:20*em,color:'rgb(173,173,173)',marginLeft:20*em,width:'100%'}}>感谢您对我要节约的信任，期待再次光临。</Text>
                                </View>
                                <View style={{flexDirection:'row',height:50*em}}>
                                    <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                                        <Text>关闭</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center',borderColor:'rgb(173,173,173)',borderLeftWidth:1*em}}>
                                        <Text style={{color:'rgb(255,189,90)'}}>评价</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>:null
                }
                {
                    this.state.allowModalSecond === true ?
                        <Modal isVisible={true} style={{width:'100%',height:600*em,justifyContent:'center',alignItems:'center'}} onBackdropPress={this.change_allowModalSecond.bind(this)}>
                            <View style={{backgroundColor:'#fff',width:400*em,height:250*em,borderRadius:10*em,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <View style={{flexDirection:'column',width:'100%',height:200*em,justifyContent:'center',alignItems:'center',borderColor:'rgb(213,213,213)',borderBottomWidth:1*em}}>
                                    <Text style={{fontSize:20*em,color:'#000',marginLeft:180*em,width:400*em}}>确认收货，才能评价哦。</Text>
                                </View>
                                <View style={{flexDirection:'row',height:50*em}}>
                                    <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                                        <Text>再想想</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center',borderColor:'rgb(173,173,173)',borderLeftWidth:1*em}}>
                                        <Text style={{color:'rgb(255,189,90)'}}>确认收货</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>:null
                }
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }
}
