import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {API_BASE_URL} from "../../config/app";
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
            bottom_status: 2,
            content:[],
        }
    }
    componentWillMount() {
        var id = this.props.navigation.state.params.id;
        var self = this;
        axios.get(API_BASE_URL+'myaccount/my_info/change_status',{
            params:{
                id: id,
            }
        }).then(function (res) {
            const {data} = res;
            if(data.status=='success'){

            }
            else if(data.status == 'false'){

            }
        });
        axios.get(API_BASE_URL+'myaccount/my_info/show_news',{
            params:{
                id: id,
            }
        }).then(function (res) {
            const {data} = res;
            if(data.status=='success'){
                let data = res.data.news;
                var content = [];
                for( i=0;i<data.length;i++){
                    content.push({date_time:data[i].time, simple_text:data[i].title, more_text:data[i].content});
                }
                self.setState({
                    content:content
                });
            }
            else if(data.status == 'false'){

            }
        });
    }
        goTo = () => {};
    gotoBack = () => {
        this.props.navigation.navigate('myaccount/news')
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
        return (
            <View style={{flex:1}}>
                <ScrollView style={{backgroundColor:'#f2f2f2', paddingTop:20*em}}>
                    {
                        this.state.content.map((item, index) => {
                            return (
                                <View key={index} style={{width:W}}>
                                    <View style={{justifyContent:'center', alignItems:'center',marginBottom:20*em}}>
                                        <Text style={{width:250*em, backgroundColor:'#cfcfcf', borderRadius:20*em, color:'#fff', fontSize:18*em, padding:5*em, textAlign:'center'}}>{item.date_time}</Text>
                                    </View>
                                    <View style={{height:80*em, flexDirection:'row', marginBottom:20*em, marginLeft:20*em}}>
                                        <Image source = {require('../../images/speaker.png')} style={{width: 70*em, height: 70*em}}/>
                                        <ImageBackground source={require('../../images/message.png')} style={{width:300*em, height:'100%', marginLeft:15*em}} resizeMode="stretch">
                                            <Text style={{height:'100%', color:'#000', fontSize: 18*em, marginLeft:15*em, padding:10*em}}>{item.simple_text}</Text>
                                        </ImageBackground>
                                    </View>
                                    <View style={{height:120*em, flexDirection:'row', marginBottom:20*em, marginLeft:20*em}}>
                                        <Image source = {require('../../images/speaker.png')} style={{width: 70*em, height: 70*em}}/>
                                        <ImageBackground source={require('../../images/message.png')} style={{width:430*em, height:'100%', marginLeft:15*em}} resizeMode="stretch">
                                            <Text style={{height:'100%', color:'#000', fontSize: 18*em, marginLeft:15*em, padding:10*em}}>{item.more_text}</Text>
                                        </ImageBackground>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <BottomNavBar buttons={buttons}/>
            </View>
        )
    }
}
export default Scene;

const style = StyleSheet.create({
    record:{
        paddingLeft:20*em, paddingRight:20*em, paddingTop:25*em, paddingBottom:25*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'
    }
});