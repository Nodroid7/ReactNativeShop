import React,{Component} from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {em, W} from '../config/uivar'

export class Noodle extends Component{
    constructor() {
        super();
    }


    render(){
        const {imgPath, label, style} = this.props;
        return(
            <View style={[{width:100*em,height:100*em,justifyContent:'center',alignItems:'center'}, style]}>
                <ImageBackground source={imgPath} style={{width:'100%',height:'100%'}}>
                    <TouchableOpacity style={{position:'absolute', right:-5, top:-5}} onPress={this.props.close.bind(this)}>
                        <Image source={require('../images/CloseButton.png')} style={{width:20*em,height:20*em}} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}