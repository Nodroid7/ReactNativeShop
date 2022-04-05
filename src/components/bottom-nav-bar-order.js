import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class BottomNavBarOrder extends Component {
    render () {
        const { buttons } = this.props;
        return (
            <View style={{position: 'absolute',  flex: 1,bottom: 0,width: W, height: 80 * em, borderTopColor: '#dfdfdf', borderBottomWidth: 1 * em,
                flexDirection: 'row'}}>
                <TouchableOpacity onPress={buttons[0].action} style={{justifyContent: 'center', alignItems: 'center', width:'20%',backgroundColor:'rgb(124,124,124)',borderRightWidth: 1*em, borderRightColor: '#999',}}>
                    {
                        <View style={{alignItems: 'center', flexDirection: 'row',justifyContent:'center'}}>
                            <Image source={buttons[0].normalImage} style={{width: 23 * em, height: 23 * em,marginRight:5*em}}/>
                            <Text style={{color: 'white', fontSize: 23 * em}}>{buttons[0].label}</Text>
                        </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={buttons[1].action} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,202,76)',flex:1, borderRightWidth: 1*em, borderRightColor: '#999'}}>
                    {
                        <View style={{alignItems: 'center', flexDirection: 'row',justifyContent:'center'}}>
                            <Text style={{color: '#363636', fontSize: 23 * em,fontWeight:'bold'}}>{buttons[1].label}</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}
