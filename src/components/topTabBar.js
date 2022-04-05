import React, {Component} from 'react'
import {em, W} from '../config/uivar'
import {View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import { Badge } from 'react-native-elements'

export class TopTabBar extends Component {
    render() {
        const {buttons, chosenButton} = this.props;
        return (
            <View style={{
                position: 'absolute', top:0,
                width: W, height: 60 * em, backgroundColor: '#ffffff',
                borderBottomColor: '#dfdfdf', borderBottomWidth: 1 * em,
                flexDirection: 'row',
            }}>
                {
                    buttons.map((item, index) => {
                        return (
                            <View key={index} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                {(chosenButton === index) ? (
                                    <TouchableOpacity style={{alignItems: 'center', borderBottomColor:'rgb(255, 202, 76)', borderBottomWidth:2*em, padding:16*em}} onPress={item.action}>
                                        <Text style={{color: '#000', fontSize: 20 * em}}>{item.label}</Text>
                                        {(item.isRead === true) ? (
                                            <Badge
                                                badgeStyle={{backgroundColor: '#f25c46'}}
                                                containerStyle={{position: 'absolute', top: -5 * em, right: -5 * em}}
                                            />
                                        ) : null}
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity style={{alignItems: 'center'}} onPress={item.action}>
                                        <Text style={{color: '#999999', fontSize: 20 * em}}>{item.label}</Text>
                                        {(item.isRead === true) ? (
                                            <Badge
                                                badgeStyle={{backgroundColor: '#f25c46'}}
                                                containerStyle={{position: 'absolute', top: -5 * em, right: -5 * em}}
                                            />
                                        ) : null}
                                    </TouchableOpacity>
                                )}
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}