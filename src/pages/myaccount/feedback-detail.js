import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image,TouchableOpacity,StyleSheet, ScrollView, TextInput} from 'react-native';
import {Roundbutton} from "../../components/buttons";
import {TabBar} from "../../components/tabbar1";
import {Button_Ok_Cancel} from "../../components/buttons";

class Scene extends Component{
    static navigationOptions = {
      headerStyle:{
          display:'none'
      }
    };
    constructor() {
        super();
        this.state = {tab_status: 1}
    }
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    gotoBack = () => {
        this.props.navigation.goBack();
    };
    render(){
        const tabs = [{
            label: '我要反馈'
        }, {
            label: '反馈历史',
        }];
        const buttons = [{
            label: '首页',
            normalImage: require('../../images/icons/home.png'),
            action: this.gotoHome.bind(this)
        }, {
            label: '返回',
            normalImage: require('../../images/icons/back.png'),
            action: this.gotoBack.bind(this)
        }];
        const buttonlabel = this.props.navigation.state.params.buttonlabel;
        const text = this.props.navigation.state.params.text;
        const detail = this.props.navigation.state.params.detail;
        console.log(detail);
        return(
            <View style={{flex:1}}>
                <ScrollView style={{marginBottom:90*em}}>
                    <TabBar tabs={tabs} chosenButton={this.state.tab_status} />
                    <View style={style.record}>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Roundbutton style={{marginLeft:20*em}} Detail={null} label={buttonlabel}></Roundbutton>
                            <Text style={{color:'rgb(38,38,38)',fontSize:20*em,textAlign:'center',marginLeft:10*em}} keyborad>{text}</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <TextInput style={{width:600*em,marginLeft:20*em, marginTop:20*em,marginRight:20*em, height:300*em,color:'rgb(129,129,129)'}}  defaultValue={detail} multiline={true}/>
                            <Text style={{color:'rgb(198,198,198)',fontSize:20*em,textAlign:'right',marginRight:20*em}}>2018-12-20 12:55:19</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingTop: 10*em,marginLeft:20*em}}>
                        <Button_Ok_Cancel style={{width:295*em,height:50*em,margintLeft:20*em,marginRight:10*em,backgroundColor: 'rgb(36,208,141)',borderRadius:3*em,justifyContent:'center',alignItems: 'center'}} title={'修改'}/>
                        <Button_Ok_Cancel style={{width:295*em,height:50*em,backgroundColor: 'rgb(230,0,18)',borderRadius:3*em, justifyContent:'center',alignItems: 'center'}} title={'删除'}/>
                    </View>
                </ScrollView>
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }
}
export default Scene;
const style = StyleSheet.create({
    record:{
        backgroundColor:'#fff',marginTop:10*em,paddingTop:15*em, paddingBottom:25*em
    }
});