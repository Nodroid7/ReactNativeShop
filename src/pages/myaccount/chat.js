import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {TextWithImage} from "../../components/buttons"
import Picker, {CascadePicker} from 'react-native-picker-xg'
import Modal from 'react-native-modal'
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import {PagerDotIndicator, IndicatorViewPager} from 'React-Native-ViewPager-master'

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    constructor() {
        super();
        this.state = {
            message: '',
            isEmotionalButton: false,
            isPlusButton: false,
            bottomBar: '',
            isModalVisible: false,
            isTextInputFocus: false
        };
    }

    state = {
        message: '',
        isEmotionalButton: false,
        isPlusButton: false,
        bottomBar: '',
        isModalVisible: false,
        isTextInputFocus: false
    };


    goTo = () => {
    };
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    pressEmotionalButton = () => {
        this.setState({isPlusButton:false});
        if (this.state.isEmotionalButton === false)
            this.setState({isEmotionalButton:true});
        else
            this.setState({isEmotionalButton:false});
        this.setState({bottomBar:'Emotion'});
    };

    pressPlusButton = () => {
        this.setState({isEmotionalButton:false});
        if (this.state.isPlusButton === false)
            this.setState({isPlusButton:true});
        else
            this.setState({isPlusButton:false});
        this.setState({bottomBar:'Plus'});
    };

    onClose = () => {
        this.setState({
            ...this.state,
            isModalVisible: false
        });
        this.props.navigation.navigate('myaccount/chat');
    };

    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={{backgroundColor:'#000'}} pageCount={2} />;
    };

    render() {
        const content = [{
            flag:0,
            date_time: '2018年12月08日 09:54',
            text: '您好，我是本次为您服务的客服小美_19126，很高兴为您服务~'
        },{
            flag:1,
            date_time: '今天 09:54',
            text: '威远吉大超市（订单号：1234567890）'
        },{
            flag:0,
            date_time: '',
            text: 'Hi~您是以下订单遇到问题么？'
        }];

        const modal_content = [{
            title: '威远吉大超市',
            status: '订单完成',
            number: '订单号：1234567890',
            date_time: '2018-12-20 12:22:56'
        },{
            title: '威远吉大超市',
            status: '订单完成',
            number: '订单号：1234567890',
            date_time: '2018-12-20 12:22:56'
        },{
            title: '威远吉大超市',
            status: '订单完成',
            number: '订单号：1234567890',
            date_time: '2018-12-20 12:22:56'
        },{
            title: '威远吉大超市',
            status: '订单完成',
            number: '订单号：1234567890',
            date_time: '2018-12-20 12:22:56'
        },{
            title: '威远吉大超市',
            status: '订单完成',
            number: '订单号：1234567890',
            date_time: '2018-12-20 12:22:56'
        }];

        const emoticon_content =[
            ['kaixin.png', 'ku.png', 'tanchi.png', 'taoyan.png', 'tianshi.png', 'tiaopi.png', 'maren.png', 'guaiwu.png', 'heng.png'],
            ['kaixin.png', 'ku.png', 'tanchi.png', 'taoyan.png', 'tianshi.png', 'tiaopi.png', 'maren.png', 'guaiwu.png', 'heng.png'],
            ['kaixin.png', 'ku.png', 'tanchi.png', 'taoyan.png', 'tianshi.png', 'tiaopi.png', 'maren.png', 'guaiwu.png', '聊天-删除.png']
        ];
        return (
            <View style={{flex:1}}>
                <Image source={require('../../images/chat_user.png')} style={{width:W, height:60*em}} resizeMode="stretch">
                </Image>
                <ScrollView>
                    {
                        content.map((item, index) => {
                            return (
                                <View key={index}>
                                    <View style={{justifyContent:'center', alignItems:'center', marginTop:10*em}}>
                                        <Text style={{fontSize:18*em, color:'#b5b5b5'}}>{item.date_time}</Text>
                                    </View>
                                    {item.flag === 0 ?
                                        <View style={{alignItems:'flex-start', marginRight:40*em}}>
                                            <ImageBackground source={require('../../images/message.png')} style={{
                                                justifyContent: 'center',
                                                padding: 20*em,
                                            }} resizeMode="stretch">
                                                <Text style={{
                                                    marginLeft: 30 * em,
                                                    marginRight: 10 * em,
                                                    color: '#000',
                                                    fontSize: 22 * em
                                                }}>{item.text}</Text>
                                            </ImageBackground>
                                        </View>
                                        :
                                        <View style={{alignItems:'flex-end'}}>
                                            <ImageBackground source={require('../../images/message_orange.png')} style={{
                                                justifyContent: 'center',
                                                padding: 20*em,
                                            }} resizeMode="stretch">
                                                <Text style={{
                                                    marginLeft: 30 * em,
                                                    marginRight: 10 * em,
                                                    color: '#000',
                                                    fontSize: 22 * em
                                                }}>{item.text}</Text>
                                            </ImageBackground>
                                        </View>
                                    }
                                </View>

                            )
                        })
                    }
                </ScrollView>
                <TouchableOpacity style={{borderColor:'#757575', marginLeft:20*em, backgroundColor:'#fff', width:70*em, height:70*em, padding:15*em, justifyContent:'center', alignItems:'center'}}  onPress={this.gotoBack.bind(this)}>
                    <Image source={require('../../images/left.png')} style={{width:'50%', height:'100%'}} resizeMode="stretch"/>
                </TouchableOpacity>
                <View style={{borderBottomColor:'#e9e9e9', borderBottomWidth:2*em, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10*em, padding:10*em}}>
                    <View style={{padding:5*em, flexDirection:'row', alignItems:'center'}}>
                        <TextInput ref={(a) => this.message = a} style={{height:70*em, backgroundColor:'#fff',paddingLeft:20*em, color:'#b7b7b7'}} onChangeText={(data)=>{this.setState({message:data})}} onFocus={() => this.setState({isTextInputFocus:true})} placeholder="请描述您的问题..."/>
                    </View>
                    <View style={{paddingRight:20*em, flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity style={{width:60*em, height:60*em, marginRight:10*em}} onPress={this.pressEmotionalButton.bind(this)}>
                            <Image source={require('../../images/表情-微笑.png')} style={{width:'100%', height:'100%'}} resizeMode="stretch"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:60*em, height:60*em, marginRight:10*em}} onPress={this.pressPlusButton.bind(this)}>
                            {
                                // console.log(this.refs.a)
                                this.state.isTextInputFocus === false ?
                                    <Image source={require('../../images/加.png')} style={{width:'100%', height:'100%'}} resizeMode="stretch"/>
                                    :
                                    <Image source={require('../../images/upload_chat.png')} style={{width:'100%', height:'100%'}} resizeMode="stretch"/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.isEmotionalButton === true ?
                        <IndicatorViewPager style={{width:W, padding:10*em, height: 150, backgroundColor:'#fff'}} indicator={this._renderDotIndicator()}>
                            <View>
                                {
                                    emoticon_content.map((item, index) => {
                                        return (
                                            <View key={index} style={{flexDirection:'row'}}>
                                                {
                                                    item.map((sub_item, index) => {
                                                        return (
                                                            <TouchableOpacity key={index} style={{margin:15*em}}>
                                                                <Image source={require('../../images/表情包/kaixin.png')} style={{width:40*em, height:40*em}}/>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View>
                                {
                                    emoticon_content.map((item, index) => {
                                        return (
                                            <View key={index} style={{flexDirection:'row'}}>
                                                {
                                                    item.map((sub_item, index) => {
                                                        return (
                                                            <TouchableOpacity key={index} style={{margin:15*em}}>
                                                                <Image source={require('../../images/表情包/kaixin.png')} style={{width:40*em, height:40*em}}/>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                }
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </IndicatorViewPager>
                        :
                        <View style={{display:'none'}}>
                            <Text>to be hidden</Text>
                        </View>
                }
                {
                    this.state.isPlusButton === true ?
                        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#fff', padding:50*em}}>
                            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginRight:20*em}} onPress={() => {this.setState({isModalVisible:true})}}>
                                <Image source={require('../../images/dingdan_icon.png')} style={{width:70*em, height:70*em}} />
                                <Text>订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginLeft:20*em}}>
                                <Image source={require('../../images/图片.png')} style={{width:70*em, height:70*em}} />
                                <Text>图片</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{display:'none'}}>
                            <Text>to be hidden</Text>
                        </View>
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    isVisible = {this.state.isModalVisible}
                    onBackdropPress = {this.onClose.bind(this)}
                    style={{marginTop:500*em}}>
                    <View style={{backgroundColor:'#fff', padding:20*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{fontSize:18*em}}>请选择您要资讯的订单</Text>
                        <TouchableOpacity onPress={this.onClose.bind(this)} style={{alignItems:'center'}}>
                            <Image source={require('../../images/close_icon.png')} style={{width:18*em, height:18*em}} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        {
                            modal_content.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{backgroundColor:'#eeeeee', flexDirection:'row', alignItems:'center', borderBottomColor:'#cecece', borderBottomWidth:2*em}}>
                                        <View style={{width:'15%', justifyContent:'center', alignItems:'center', padding:20*em}}>
                                            <Image source={require('../../images/dingdan_image.png')} style={{width:70*em, height:70*em}} />
                                        </View>
                                        <View style={{width:'85%'}}>
                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingRight:20*em}}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{color:'#000', fontSize:20*em}}>{item.title}</Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{color:'#000', fontSize:20*em}}>{item.status}</Text>
                                                </View>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingRight:20*em}}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{color:'#7f7f7f', fontSize:16*em}}>{item.number}</Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{color:'#7f7f7f', fontSize:16*em}}>{item.date_time}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </Modal>
            </View>
        )
    }
}
export default Scene;