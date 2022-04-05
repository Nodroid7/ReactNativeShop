import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {TabBar} from "../../components/tabbar";
import {TopBarWithSearch} from "../../components/topbar";
const headerStyles = StyleSheet.create({
    flexRow: {flexDirection: 'row'},
    justBetween: {justifyContent: 'space-between'},
    container: {marginTop: 75*em, marginBottom: 35*em, paddingLeft: 20*em, paddingRight:20*em, width: '100%', height: 100*em},
    mainImg: {width: 98*em, height: 98*em, borderRadius: 4*em, borderWidth: 4*em, borderColor: 'white'},
    title: {fontSize: 28*em, color: 'white', fontWeight: 'bold'},
    detail: {fontSize: 20*em, color: 'rgb(65, 65, 65)'},
    rightCallBack: {width: 57*em, height: 57*em, borderRadius: 28.5*em, backgroundColor: 'white'},
    rightCall: {width: 49*em, height: 49*em},
    plusbutton:{width:35*em,height:35*em}
});
const categories = [
    {main: '进囗食品', childs: ['com1-1', 'com1-2', 'com1-3', 'com1-4', 'com1-5']},
    {main: '休闲食品', childs: ['com1-2', 'com2-2', 'com2-3', 'com2-4', 'com2-5']},
    {main: '粮油凋味', childs: ['com1-3', 'com3-2', 'com3-3', 'com3-4', 'com3-5']},
    {main: '香烟名酒', childs: ['com1-4', 'com4-2', 'com4-3', 'com4-4', 'com4-5']},
    {main: '进囗食品', childs: ['com1-5', 'com5-2', 'com5-3', 'com5-4', 'com5-5']},
    {main: '进囗食品', childs: ['com1-6', 'com6-2', 'com6-3', 'com6-4', 'com6-5']},
];
const bodyStyles = StyleSheet.create({
    flexRow: {flexDirection: 'row'},
    typeGroup: {width: '20%',backgroundColor:'rgb(245,245,245)'},
    goodsGroup: {width: '80%'},
    textRecord:{backgroundColor:'#fff'}
});
class Scene extends Component {
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
    gotoBack = () => {
        this.props.navigation.goBack();
    };
    goto = () => {
    };
    goBack() {
        this.props.navigation.goBack();
    }
    gotoHome = () => {

    };
    goTo = (data) => {
        this.props.navigation.navigate('services/' + data);
    };
    gotoCateInfo = ()=>{
        this.props.navigation.navigate('services/cateinfo');
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <TopBarWithSearch searchText="搜索商品" onBack={this.goBack.bind(this)} onSearch={this.goTo.bind(this, 'category_search')}/>
                <View style={headerStyles.container}>
                    <View style={[headerStyles.flexRow, headerStyles.justBetween]}>
                        <View style={headerStyles.flexRow}>
                            <TouchableOpacity onPress={this.gotoCateInfo.bind(this)}>
                                <Image source={require('../../images/Service/shop.png')} style={headerStyles.mainImg} resizeMode="cover"/>
                            </TouchableOpacity>
                            <View style={[headerStyles.justBetween, {paddingBottom: 7*em, paddingTop: 3*em, marginLeft: 20*em}]}>
                                <Text style={headerStyles.title}>万达生鲜超市</Text>
                                <Text style={headerStyles.detail}>月售262  起送10元</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{justifyContent: 'center'}}>
                            <View style={[headerStyles.rightCallBack, {justifyContent: 'center', alignItems: 'center'}]}>
                                <Image source={require('../../images/Service/phone.png')} style={headerStyles.rightCall} resizeMode="cover"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:1*em,backgroundColor:'rgb(255,255,255)',height:900*em,flexDirection:'column',padding:20*em}}>
                    <Text style={{color:'rgb(26,26,26)',fontWeight: 'bold',marginBottom:10*em}}>信息</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10*em}}>
                        <Image source={require('../../images/3-1/home-symbol.png')} style={{marginRight:10*em,width:30*em,height:30*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(79,79,79)'}}>商家名称：威远城万达生鲜超市</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10*em}}>
                        <Image source={require('../../images/3-1/address-symbol.png')} style={{marginRight:10*em,width:30*em,height:30*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(79,79,79)'}}>商家地址：威远城11号楼万达生鲜超市</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10*em}}>
                        <Image source={require('../../images/3-1/time.png')} style={{marginRight:10*em,width:30*em,height:30*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(79,79,79)'}}>营业时间：早 06：00 ~ 晚23：00 </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:10*em}}>
                        <Image source={require('../../images/3-1/phone-symbol.png')} style={{marginRight:10*em,width:30*em,height:30*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(79,79,79)'}}>商家电话：13234342555</Text>
                    </View>
                    <Text style={{color:'rgb(26,26,26)',fontWeight: 'bold',marginTop:10*em,marginBottom:10*em}}>公告</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:30*em}}>
                        <Image source={require('../../images/3-1/horn.png')} style={{marginRight:10*em,width:30*em,height:30*em}} resizeMode={'contain'}/>
                        <Text style={{color:'rgb(79,79,79)'}}>欢迎光临</Text>
                    </View>
                    <TouchableOpacity style={{width:600*em,backgroundColor:'rgb(227,227,227)',height:70*em,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'rgb(26,26,26)'}}>举报商家</Text>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center',alignItems:'center', marginTop:420*em}}>
                        <TouchableOpacity onPress={this.gotoBack.bind(this)}>
                            <Image source={require('../../images/3-1/up-symbol.png')} style={{width:25*em,height:12*em}} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default Scene;