import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {Select,Option} from 'react-native-select-lists-roil'


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
                picture:require('../../images/Service/4-4/body-1.png'),
                name:'苹果',
                number:'x10',
                price:'￥11'
            },{
                picture:require('../../images/Service/4-4/body-2.png'),
                name:'可口可乐',
                number:'x10',
                price:'￥6'
            },{
                picture:require('../../images/Service/4-4/body-3.png'),
                name:'利群',
                number:'x10',
                price:'￥6'
            }]
        }
    }
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    goto = () => {
    };
    gotoHome = () => {

    };
    gotoordersubmit = ()=>{
        this.props.navigation.navigate('services/all_orders');
    };
    render(){
        // let {content} = this.state;
        return(
            <View style={{flex:1,backgroundColor:'rgb(246,246,246)'}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'column',padding:20*em,marginBottom:10*em,backgroundColor:'rgb(255,255,255)'}}>
                        <Text style={{color:'rgb(25,25,25)'}}>威远城11号楼一单元801</Text>
                        <Text style={{color:'rgb(90,90,90)'}}>金成成(先生)   13944390031</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(255,255,255)',padding:20*em,flexDirection:'row',alignItems:'center',borderBottomWidth:2*em,borderBottomColor:'rgb(221,221,221)'}}>
                        <Image source={require('../../images/Service/4-4/top.png')} style={{width:25*em,height:20*em,marginRight:15*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(72,72,72)',fontSize:20*em}}>威远城吉大超市</Text>
                    </View>
                    <View style={{backgroundColor:'rgb(255,255,255)'}}>
                        {
                            this.state.content.map((item,index)=>{
                                return(
                                    <View key={index}>
                                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',position:'relative',paddingLeft:20*em,paddingRight:20*em,paddingTop:10*em,paddingBottom:10*em,borderBottomWidth:1*em,borderBottomColor:'rgb(233,233,233)'}}>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Image source={item.picture} style={{width:70*em,height: 70*em,marginRight:15*em}} resizeMode={'contain'}/>
                                                <Text style={{color:'rgb(38,38,38)'}}>{item.name}</Text>
                                            </View>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Text style={{color:'rgb(38,38,38)'}}>{item.price}</Text>
                                            </View>
                                        </View>
                                        <Text style={{marginRight:40*em,position:'absolute',marginLeft:430*em,marginTop:31*em,fontSize: 20*em}}>{item.number}</Text>
                                    </View>
                                )

                            })
                        }
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',paddingLeft:20*em,paddingRight:20*em,paddingTop:10*em,paddingBottom:10*em,borderBottomWidth:1*em,borderBottomColor:'rgb(233,233,233)'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{backgroundColor:'rgb(230,0,18)',color:'white',fontSize:15*em,padding:2*em,marginRight:15*em}}>惠</Text>
                                <Text style={{color:'rgb(72,72,72)',fontSize:20*em}}>优惠</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{backgroundColor:'rgb(230,0,18)',color:'white',fontSize:15*em,padding:2*em,marginRight:15*em}}>惠</Text>
                                <Text style={{color:'rgb(72,72,72)',fontSize:20*em,marginRight:15*em}}>积分</Text>
                                <Text style={{color:'red',marginRight:15*em}}>50</Text>
                                <Select selectStyle={{width:150*em, alignItems:'center', zIndex:50, borderRadius:5*em,backgroundColor: '#ffffff', borderColor:'rgb(182,182,182)', borderWidth:1*em,marginRight:20*em}}>
                                    <Option value={1}>0</Option>
                                    <Option value={2}>10</Option>
                                    <Option value={3}>25</Option>
                                    <Option value={4}>50</Option>
                                    <Option value={5}>100</Option>
                                </Select>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',paddingLeft:20*em,paddingRight:20*em,paddingTop:25*em,paddingBottom:25*em,borderBottomWidth:1*em,borderBottomColor:'rgb(233,233,233)'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'rgb(72,72,72)',fontSize:20*em,marginRight:5*em}}>优惠规则</Text>
                                <Image source={require('../../images/Service/4-4/question-symbol.png')} style={{width:20*em,height:20*em}} resizeMode={'contain'}/>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:'rgb(25,25,25)'}}>已优惠 </Text>
                                <Text style={{color:'red'}}>￥1</Text>
                                <Text style={{color:'rgb(25,25,25)',fontSize:18*em}}> 小计</Text>
                                <Text style={{color:'rgb(38,38,38)',fontWeight:'bold'}}>￥22</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width:W,flexDirection:'row',marginTop: 10*em,backgroundColor:'rgb(255,255,255)',paddingLeft:20*em,paddingRight:20*em,paddingTop:25*em,paddingBottom:25*em,}}>
                        <View style={{width:'15%',justifyContent:'center'}}>
                            <Text style={{color:'rgb(72,72,72)'}}>备注</Text>
                        </View>
                        <View style={{width:'85%',backgroundColor:'rgb(235,235,235)',padding:25*em,borderRadius:5*em,height:150*em}}>
                            <Text style={{fontSize:21*em,color:'rgb(144,144,144)'}}>请输入备注内容</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:W,position:'absolute',bottom:0,	borderTopColor: '#dfdfdf', borderBottomWidth: 1*em,}}>
                    <TouchableOpacity onPress={this.gotoBack.bind(this)} style={{flexDirection:'row',width:'20%',backgroundColor:'rgb(124,124,124)',justifyContent:'center',alignItems:'center',borderRightColor: '#999',paddingTop:25*em,paddingBottom:25*em}}>
                        {
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../images/Service/back-symbol.png')} style={{width:21*em,height:21*em,marginRight:2*em}}/>
                                <Text style={{color:'white',fontSize:21*em}}>返回</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',width:'60%',backgroundColor:'rgb(69,69,69)',paddingLeft:15*em,paddingRight:15*em,justifyContent:'space-between'}}>
                        <Text style={{color:'white',fontSize:19*em}}>已优惠￥1</Text>
                        <Text style={{color:'white',fontSize:19*em}}>合计￥25 </Text>
                    </View>
                    <TouchableOpacity onPress={this.gotoordersubmit.bind(this)} style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:'20%',backgroundColor:'rgb(255,202,76)'}}>
                        <View>
                            <Text style={{fontWeight:'bold',color:'black'}}>提交订单</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}
export default Scene;
