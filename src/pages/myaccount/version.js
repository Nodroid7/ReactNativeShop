import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {View, Text, ImageBackground, Image,TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {StepIndicator} from '../../components/StepIndicator';

export default class version extends Component{
    static navigationOptions = {
        headerStyle:{
            display:'none'
        }
    };
    constructor() {
        super();
        this.state = {
            currentPosition: 0
        }
    }

    customStyles = {
        stepIndicatorSize: 14,
        currentStepIndicatorSize:20,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 10,
        stepStrokeCurrentColor: 'rgb(0,114,188)',
        stepStrokeWidth: 7,
        stepStrokeFinishedColor: '#aaaaaa',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#aaaaaa',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#aaaaaa',
        stepIndicatorCurrentColor: '#aaaaaa',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelCurrentColor: '#aaaaaa',
        stepIndicatorLabelFinishedColor: '#aaaaaa',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelSize: 13,
        currentStepLabelColor: '#aaaaaa',
    }
    stepLabelContent = [{
        versionNum:'V5.0',
        text:'增强搜索功能（标签搜索，商家搜索）\n' +
                '新增关注商家功能，活动圈（发布活动将会推送到关注我的\n' +
                '用户）',
        date:'2018-12-19'
    },{
            versionNum:'V4.0',
            text:'增强搜索功能（标签搜索，商家搜索）\n' +
            '新增关注商家功能，活动圈（发布活动将会推送到关注我的\n' +
            '用户）',
            date:'2018-12-19'
        },{
            versionNum:'V3.0',
            text:'增强搜索功能（标签搜索，商家搜索）\n' +
            '新增关注商家功能，活动圈（发布活动将会推送到关注我的\n' +
            '用户）',
            date:'2018-12-19'
        },{
        versionNum:'V2.0',
        text:'增强搜索功能（标签搜索，商家搜索）\n' +
        '新增关注商家功能，活动圈（发布活动将会推送到关注我的\n' +
        '用户）',
        date:'2018-12-19'
    },{
        versionNum:'V1.0',
        text:'增强搜索功能（标签搜索，商家搜索）\n' +
        '新增关注商家功能，活动圈（发布活动将会推送到关注我的\n' +
        '用户）',
        date:'2018-12-19'
    }];
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    gotoBack = () => {
        this.props.navigation.goBack();
    };
    onPageChange(position){
        this.setState({currentPosition: position});
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
        let stepContent =  this.stepLabelContent.map((item,index) => {
            return(
                <TouchableOpacity key={index} style={{flexDirection:'column',paddingTop:20*em,paddingBottom:48*em,borderBottomColor:'rgb(194,194,194)',borderBottomWidth:1*em}} onPress={this.onPageChange.bind(this,index)}>
                    {
                        index === this.state.currentPosition ? (
                            <View>
                                <Text style={{fontSize:20*em,color:'rgb(0,114,188)'}}>{item.versionNum}</Text>
                                <Text style={{fontSize:20*em,color:'rgb(0,114,188)'}}>{item.text}</Text>
                                <Text style={{fontSize:20*em,color:'rgb(0,114,188)'}}>{item.date}</Text>
                            </View>
                        ):(
                            <View>
                                <Text style={{fontSize:20*em}}>{item.versionNum}</Text>
                                <Text style={{fontSize:20*em}}>{item.text}</Text>
                                <Text style={{fontSize:20*em}}>{item.date}</Text>
                            </View>
                        )
                    }
                </TouchableOpacity>
            )
        });
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.record}>
                    <Image source={require('../../images/version-header.png')} style={{width:90*em,height:90*em,marginLeft:20*em}}/>
                    <View style={{flexDirection:'column',marginLeft:20*em}}>
                        <Text style={{fontSize:40*em,color:'rgb(36,36,36)'}}>版本</Text>
                        <Text style={{fontSize:25*em}}>版本说明内容</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{width:W,flexDirection:'row',backgroundColor:'#fff'}}>
                        <View style={{height:this.stepLabelContent.length*200*em,width:50*em,marginLeft:20*em}}>
                            <StepIndicator customStyles={this.customStyles} currentPosition={this.state.currentPosition}  direction={'vertical'} stepCount={this.stepLabelContent.length}/>
                        </View>
                        <View style={{width:550*em, height:this.stepLabelContent.length*250*em,paddingTop:60*em}}>
                            {stepContent}
                        </View>
                    </View>
                </ScrollView>
                <BottomNavBar buttons = {buttons}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    record:{
        backgroundColor:'#fff',paddingTop:25*em, paddingBottom:25*em, flexDirection:'row'
    }
});