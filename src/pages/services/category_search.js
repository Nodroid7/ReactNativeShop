import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {SearchBar, Avatar, CheckBox} from 'react-native-elements'
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    constructor(){
        super();
    }
    goBack = () => {
        this.props.navigation.goBack();
    };
    render() {
        const keywords = ['巧克力', 'AD钙奶', '冰川啤酒', '粮油', '可口可乐', '牙膏', '一次性杯子'];
        const history = ['沐浴露', '五味子泡茶'];
        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor:'#fff', borderBottomColor:'#dcdcdc', borderBottomWidth:2*em, flexDirection:'row', padding:10*em, justifyContent:'space-around', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={require('../../images/Service/left.png')} style={{width:20*em, height:40*em}} />
                    </TouchableOpacity>
                    <View style={{paddingLeft:10*em, flexDirection:'row', alignItems:'center', backgroundColor:'#c5c5c5', borderRadius:5*em}}>
                        <Image source={require('../../images/Service/search.png')} style={{width:20*em, height:20*em}}/>
                        <TextInput placeholder='搜索商品名称' style={{fontSize:20*em, height:60*em, color:'#878787', width:230}}>
                        </TextInput>
                        <Image source={require('../../images/Service/close.png')} style={{marginRight:20*em, width:30*em, height:30*em}}/>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'rgb(255,162,76)', fontSize:24*em}}>搜索</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#fff', borderBottomColor:'#e0e0e0', borderBottomWidth:1*em}}>
                    <View style={{paddingLeft:20*em, paddingTop:20*em}}>
                        <Text style={{fontSize:20*em, color:'#545454'}}>热门搜索</Text>
                    </View>
                    <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'flex-start', paddingLeft:10*em, paddingTop:10*em}}>
                        {
                            keywords.map((item, index) => {
                                return (
                                    <View key={index} style={{padding:10*em, margin:10*em, backgroundColor:'#ececec', borderColor:'#c4c4c4', borderWidth:1*em, borderRadius:30*em}}>
                                        <Text>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={{backgroundColor:'#fff', borderBottomColor:'#e0e0e0', borderBottomWidth:1*em}}>
                    <View style={{paddingLeft:20*em, paddingTop:20*em}}>
                        <Text style={{fontSize:20*em, color:'#545454'}}>历史搜索</Text>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft:10*em, paddingTop:10*em}}>
                        {
                            history.map((item, index) => {
                                return (
                                    <View key={index} style={{padding:10*em, margin:10*em, backgroundColor:'#ececec', borderColor:'#c4c4c4', borderWidth:1*em, borderRadius:30*em}}>
                                        <Text>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}
export default Scene;