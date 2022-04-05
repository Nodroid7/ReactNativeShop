import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class Colorbutton extends Component {
    render () {
        const { colorbutton } = this.props;
        return (
            <View style={{
                position: 'absolute', bottom: 0,
                width: W, height: 80 * em, backgroundColor: 'rgb(255,202,76)',flexDirection: 'row',
            }}>
                {colorbutton.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={item.action} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            {
                                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                    <Text style={{color: 'rgb(38,38,38)', fontSize: 23 * em}}>{item.label}</Text>
                                </View>
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}
