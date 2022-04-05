import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class TabBar extends Component {
    render () {
        const { tabs, chosenButton } = this.props;
        return (
            <View>
                <View style={{
                    height: 80 * em, backgroundColor: '#ffffff',
                    borderTopColor: '#dfdfdf', flexDirection: 'row',
                }}>
                    {tabs.map((item, index) => {
                        return (
                            <View key={index} style={{justifyContent: 'center', alignItems: 'center', flex: 1,borderRightWidth: 1*em, borderRightColor: '#999' }}>
                                {(chosenButton === index) ? (
                                    <TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
                                        <View style={{width: 300*em, height:80*em, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
                                            {(item.label == '我要反馈') ? (
                                                <Image style={{width:23*em,height:23*em}}source={require('../images/我要反馈-yellow.png')}/>
                                            ):(
                                                <Image style={{width:23*em,height:23*em}}source={require('../images/反馈历史-yellow.png')}/>
                                            )}
                                            <Text style={{color: 'rgb(255, 162, 76)', fontSize: 23 * em}}>{item.label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
                                        <View style={{width: 300*em, height:80*em, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
                                            {(item.label == '我要反馈') ? (
                                                <Image style={{width:23*em,height:23*em}}source={require('../images/我要反馈-black.png')}/>
                                            ):(
                                                <Image style={{width:23*em,height:23*em}}source={require('../images/反馈历史-black.png')}/>
                                            )}
                                            <Text style={{color: '#000', fontSize: 23 * em}}>{item.label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )
                    })}

                </View>
                {tabs.map((item, index) => {
                    return (
                        <View key={index}>
                            {(chosenButton === index )? item.screen : null}
                        </View>
                    )
                })}
            </View>
        )
    }
}
