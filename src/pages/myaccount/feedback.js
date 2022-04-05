import React, {Component} from 'react';
import {em, W} from '../../config/uivar'
import {BottomNavBar} from "../../components/bottom-nav-bar";
import {View, Text, ImageBackground, Image,TouchableOpacity, StyleSheet, ScrollView, TextInput} from 'react-native';
import {TabBar} from "../../components/tabbar1";
import {Noodle} from "../../components/noddle";
import {Addbutton} from "../../components/buttons";
import {Roundbutton} from "../../components/buttons";
import { Select, Option } from 'react-native-select-lists-roil';

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
     content =[
        {
            buttonlabel: '问题',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'

        },
        {
            buttonlabel: '建议',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '问题',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '建议',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '问题',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '建议',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '问题',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        },
        {
            buttonlabel: '建议',
            text: '标题内容标题内容标题内容标题内容标题内容标题',
            textdetail:'问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容问题内容问题内容问题内容\n' +
                '问题内容问题内容\n' +
                '\n' +
                '问题内容问题内容问题内容问题内容问题内容问题内容。',
            time: '2018-12-20 12:55:19'
        }
    ];
    constructor(){
        super();
        this.state={
            tab_status:0,
            noodle:[{
                label:1,
                path:require('../../images/noddle.png')
            },{
                label:2,
                path:require('../../images/noddle.png')
            },{
                label:3,
                path:require('../../images/noddle.png')
            },{
                label:4,
                path:require('../../images/noddle.png')
            }]
        }
    }
    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    gotoBack = () => {
        this.props.navigation.goBack();
    };

    goto = (text, buttonlabel,detail) => {
        this.props.navigation.navigate('myaccount/feedbackdetail',{text:text, buttonlabel:buttonlabel,detail:detail});
    };

    changeNavStatus = (id) => {
        this.setState({tab_status: id});
    };
    AddNoodle(){
        let nood = this.state.noodle;
        nood.push({label:8,path:require('../../images/noddle.png')});

        this.state.noodle = nood;
        this.forceUpdate();
    }
    closeItem(id){
        let nood = this.state.noodle;

        nood.splice(id, 1);

        this.state.noodle = nood;
        this.forceUpdate();
    }
    render_componentleft (){
        const noodle_content = this.state.noodle.map((item, index)=>{
            return(
                <View key={index}>
                    <Noodle imgPath={item.path} label={item.label} style={{marginTop:12, marginRight:12}} close={this.closeItem.bind(this, index)}/>
                </View>
                )
             })
        return(
                    <View style={{height: 670 * em, marginTop: 15*em,width: W,backgroundColor: '#ffffff', borderTopColor: '#dfdfdf', flexDirection: 'column',}}>
                            <View style={{marginLeft: 15*em, marginRight:15*em,  width: W,backgroundColor: '#ffffff', flexDirection: 'row'}}>
                                <Text style={{marginLeft:20*em, marginTop:30*em,color: 'rgb(40,40,40)', fontSize: 23 * em,alignItems: 'center'}}>反馈类型</Text>
                                <Select selectStyle={{width:470*em, marginTop:10*em, zIndex:50, borderRadius:5*em,   backgroundColor: '#ffffff', borderColor:'rgb(182,182,182)', borderWidth:1*em}}>
                                    <Option value={1}>请选择</Option>
                                    <Option value={2}>请选择1</Option>
                                </Select>
                            </View>
                            <View style={{marginLeft: 15*em, marginRight:15*em,  width: W,backgroundColor: '#ffffff', flexDirection: 'row'}}>
                                <Text style={{marginLeft:20*em, marginTop:30*em,color: 'rgb(40,40,40)', fontSize: 23 * em,alignItems: 'center'}}>反馈标题</Text>
                                <TextInput style={{marginLeft:20*em,marginRight:20*em,width:470*em,height:70*em,marginTop:15*em,borderColor:'rgb(182,182,182)', borderRadius:5*em,borderWidth: 1*em,alignItems:'center'}}/>
                            </View>
                            <View style={{marginLeft: 15*em, marginRight:15*em,  width: W, height:250*em,backgroundColor: '#ffffff', flexDirection: 'row'}}>
                                <Text style={{marginLeft:30*em, marginTop:30*em,color: 'rgb(141,141,141)', fontSize: 23 * em,alignItems: 'center'}}>请详细描述您的问题</Text>
                            </View>
                            <View style={{marginLeft: 15*em, marginRight:15*em,  width: W,backgroundColor: '#ffffff', flexDirection: 'row'}}>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{marginLeft:15*em  }}>
                                    {noodle_content}
                                </ScrollView>
                                <Addbutton onAdd={this.AddNoodle.bind(this)}/>
                            </View>
                            <TouchableOpacity style={{marginLeft:30*em, marginTop:30*em,width:590*em,height:80*em,backgroundColor:'rgb(255,202,76)',justifyContent: 'center',alignItems:'center',borderRadius:5*em}}>
                                <Text style={{color: 'rgb(40,40,40)', fontSize: 23 * em,textAlign: 'center'}}>提交反馈</Text>
                            </TouchableOpacity>
                     </View>
        )
    };
    render_componentRight = (content) =>{
        return(
            <View>
                {content.map((item, index) =>  {
                    return(
                        <View key={index}>
                                <TouchableOpacity style={style.record} onPress={this.goto.bind(this,item.text,item.buttonlabel,item.textdetail)}>
                                    <Roundbutton style={{marginLeft:20*em}} label={item.buttonlabel}/>
                                    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                                        <Text style={{color:'#000',fontSize:20*em,textAlign:'center'}}>{(item.text.length > 10)?(item.text.slice(0,14) + '...'):(item.text)}</Text>
                                        <Text style={{color:'rgb(166,166,166)',fontSize:18*em,textAlign:'center',paddingRight:20*em,marginLeft:40*em}}>{item.time}</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                    )
                })}
                    <Text style={{fontSize:20*em,textAlign:'center',textDecorationLine:'underline'}}>更多</Text>
            </View>
        )
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
        const tabs = [{
            label: '我要反馈',
            action: this.changeNavStatus.bind(this, 0),
            screen: this.render_componentleft()
        }, {
            label: '反馈历史',
            action: this.changeNavStatus.bind(this, 1),
            screen: this.render_componentRight(this.content)
        }];

        return (
            <View style={{flex: 1}}>
                <ScrollView style={{marginBottom:90*em}}>
                    <View style={{width:W}}>
                        <TabBar tabs={tabs} chosenButton={this.state.tab_status} />
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
        backgroundColor:'#fff',marginTop:10*em,paddingTop:25*em, paddingBottom:25*em, flexDirection:'row', justifyContent:'space-between', alignItems:'center'
    }
});