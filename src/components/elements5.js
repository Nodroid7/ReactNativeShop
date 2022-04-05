import React, {Component} from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight} from 'react-native'

import {W, colors, fontSizes, em} from '../config/uivar'
import {linkStyles, twoButtonStyles} from '../config/data5'

export class TopBarRightImage extends Component {
    onBack() {
        this.props.onBack();
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/first_background.jpg')}
                                 style={{
                                     width: '100%', height: W*96/720,
                                     position: 'relative', justifyContent: 'center'
                                 }}>
                    <View style={{
                        position: 'absolute', left: W*21/720, top: W*30/960,
                        alignSelf: 'center'
                    }}>
                        <TouchableOpacity onPress={this.onBack.bind(this)}>
                            <Image source={require('../images/first_background.jpg')} style={{
                                width: W*22/720, height: W*40/720
                            }}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        position: 'absolute', left: 0, top: W*24/960,
                        width: '100%',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{
                            color: colors.primaryForeground,
                            fontSize: W*0.05,
                        }}>{this.props.title}</Text>
                    </View>
                    {this.renderActionBtn()}
                </ImageBackground>
            </View>
        )
    }
    renderActionBtn() {
        if (this.props.actionBtn) {
            return (
                <View style={{
                    position: 'absolute', right: W*20/960, top: W*35/960,
                    width: '100%',
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity onPress={() => this.props.change_search_state()}>
                        <Image source={this.props.image_url} style={{
                            width: W*40/720, height: W*40/720
                        }}/>
                    </TouchableOpacity>
                </View>
            )
        }

    }
}
export class Next extends Component {

    constructor(props){
        super(props)
    }
    goto() {
        this.props.goto();
    }
    render() {
        return (
            <View>

                <View style={{
                    position: 'absolute',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity onPress={this.goto.bind(this)} style={{marginTop: W*10/720, width: W*50/720, height: W* 80/720}}>
                        <ImageBackground source={require('../images/first_background.jpg')} style={{
                            width: W*22/720, height: W*40/720,top: W*15/400
                        }}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export class Check_button extends Component {

    constructor(props){
        super(props)
        this.state = {
            active_disable: props.ini
        }
    }

    change_state(){
        if(this.state.active_desable == 'false'){
            this.setState({
                active_disable: 'false'
            })
        }else{
            this.setState({
                active_disable: 'false'
            })
        }
    }

    render(){
        return (
            <TouchableHighlight style={{backgroundColor: 'white', }}>
                <View style={{height: W*96/720, justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{width: '85%', marginTop: 20*em, marginLeft: 50*em}}>
                        <Text style={linkStyles.linkTextWrapperSetting}>王芳</Text>
                    </View>
                    <View  style={{width: '7%', marginTop: 30*em, marginRight: 50*em}}>
                        <TouchableHighlight onPress={this.change_state.bind(this)}>
                            <Text>{this.state.active_disable}</Text>
                            {/*<Image source={require('../images/check_box.png')} style={{width: 40*em, height: 40*em}}></Image>*/}
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableHighlight>
        )

    }

}
export class SearchBar extends Component {
    onBack() {
        this.props.onBack();
    }
    render() {
        return (
            <View>
                <View style={{
                    position: 'absolute', left: W*21/720, top: W*30/960,
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity onPress={this.onBack.bind(this)}>
                        <Image source={require('../images/消息.png')} style={{
                            width: W*22/720, height: W*40/720
                        }}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute', left: 0, top: W*24/960,
                    width: '100%',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{
                        color: colors.primaryForeground,
                        fontSize: W*0.05,
                    }}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}
export class CheckImage extends Component {
    checkItem(){
        this.props.checkItem();
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.checkItem()}>
                <View style={linkStyles.linkInnerWrapper}>
                    <Text style = {linkStyles.linkTextWrapper}>
                        {this.props.text}
                    </Text>
                    {
                        this.props.checked ?
                            <Image source={require('../images/user.png')} style={{
                                width: em * 40,
                                height: em * 40,
                                position: 'absolute',
                                right: 20 * em,
                                top: 30 * em
                            }}/>:null
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

export class TextButton extends Component {
    render() {
        return (
            <View style={{}}>
                <TouchableOpacity onPress={this.props.onPress} style={{
                }}>
                    <Text style={textStyles.default}>
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class PrimaryButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <View style={{width:this.props.width}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    width: '100%', height: em*81,
                    backgroundColor: colors.primaryBackground,
                    justifyContent: 'center',
                    borderRadius: 3,
                }}>
                    <Text style={{
                        alignSelf:'center',
                        color:colors.primaryForeground,
                        fontSize: fontSizes.button,
                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class HalfPrimaryButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <View style={{width:'50%', padding:5 * em}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    width: '100%', height: em*81,
                    backgroundColor: colors.primaryBackground,
                    justifyContent: 'center',
                    borderRadius: 3,
                }}>
                    <Text style={{
                        alignSelf:'center',
                        color:colors.primaryForeground,
                        fontSize: fontSizes.button,
                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class HalfPrimaryWhiteButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <View style={{width:'50%', padding:5 * em}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    width: '100%', height: em*81,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderColor: colors.primaryBackground,
                    borderWidth: 2,
                    borderRadius: 3
                }}>
                    <Text style={{
                        alignSelf:'center',
                        color:'black',
                        fontSize: fontSizes.button,

                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class SmallWhiteButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <View style={{width:'100%', padding:0}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    width: '100%', height: em*50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderColor: colors.primaryBackground,
                    borderWidth: 2,
                    borderRadius: 3
                }}>
                    <Text style={{
                        alignSelf:'center',
                        color:'black',
                        fontSize: fontSizes.sx,

                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class SmallPrimaryButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <View style={{width:'100%', padding:0 * em}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    width: '100%', height: em*50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    borderColor: colors.primaryBackground,
                    backgroundColor: colors.primaryBackground,
                    borderWidth: 2,
                    borderRadius: 3
                }}>
                    <Text style={{
                        alignSelf:'center',
                        color:'black',
                        fontSize: fontSizes.sx,

                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class Tiny_left extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }


    render() {
        return (
            <View style={{padding:1 * em}}>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                    backgroundColor: '#F5FCFF',
                    borderColor: '#F5FCFF',
                    borderWidth: 10,
                    borderRadius: 30,
                    justifyContent: 'center',
                }}>
                    <Text style={{fontSize:23*em}}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export class Tiny_Image extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    static defaultProps = {
        width: '100%'
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} style={{
                backgroundColor: 'transparent',
                borderColor: '#F5FCFF',
                justifyContent: 'center',
            }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    {this.props.title ? <Text>{this.props.title} </Text> : null}
                    <Image source={this.props.avatar} style={{width: 35*em, height: 40*em}}></Image>
                </View>
            </TouchableOpacity>
        )
    }
}
export class SecondaryButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}
                  style={{
                      width: this.props.width, height:60*em,
                      backgroundColor: colors.secondaryBackground,
                      justifyContent: 'center',
                      paddingLeft: 24*em, paddingRight: 24*em,
                      borderRadius: 3, borderColor: colors.primary, borderWidth: 1,
                  }}>
                    <Text style={{
                        alignSelf:'center',
                        color:colors.secondaryForeground,
                        fontSize: fontSizes.small,
                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class WarringButton extends Component {
    onPress() {
        if (this.props.disabled) {
            return
        }
        this.props.onPress()
    }
    render() {
        const {disabled} = this.props;
        if (disabled) {
            return (
                <View>
                    <View style={{
                        width: '100%', height: em*81,
                        backgroundColor: colors.background,
                        justifyContent: 'center',
                        borderRadius: 3,
                    }}>
                        <Text style={{
                            alignSelf:'center',
                            color:colors.danger,
                            fontSize: fontSizes.button,
                        }}>{this.props.title}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={[{
                    width: '100%', height: em*81,
                    justifyContent: 'center',
                    borderRadius: 3,
                    borderColor: colors.danger,
                    borderWidth: 1,
                }, (this.props.disabled)?{opacity: 0.7}:{}]}>
                    <Text style={{
                        alignSelf:'center',
                        color:colors.danger,
                        fontSize: fontSizes.button,
                    }}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
