import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, Touchable} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {em, W} from '../../config/uivar'
import { SmallPrimaryButton} from '../../components/elements5'
import {Tiny_Image} from "../../components/elements4";
import {BottomNavBar} from "../../components/bottom-nav-bar"
import {Select2Field} from "../../components/inputs"
import {TextButton, PrimaryButton, TextWithImageButton} from '../../components/buttons';
import { CascadePicker } from 'react-native-picker-xg'
const axios = require('axios');
import {connect} from 'react-redux'
import {API_BASE_URL, SERVER_BASE_URL} from "../../config/app";
import {setShopID} from "../../store/actions/auth";

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    componentWillMount(): void {
        this.apartment_init();
        // this.listener = this.props.navigation.addListener('didFocus', this.apartment_init);
    }

    constructor(props) {
        super(props);
        this.state = {
            down_status: false,
            shop_status: false,
            apartment_shop: [],
            list_index: 0,
            sub_list_index: 0
            // userInfo: {
            //     user_id: null,
            //     user_name: '',
            //     user_phone : 111,
            //     user_portfolio: '',
            // },
        };
    }

    apartment_init() {
        let self = this;
         console.log(this.props.userInfo.user_phone);
        // var user_phone = this.props.userInfo.user_phone;
        axios.get(API_BASE_URL + 'auth/user/getApartmentShop', {
            params: {
                user_phone: this.props.userInfo.user_phone
            }
        }).then(function (res) {
            self.setState({...this.state, apartment_shop: res.data.apartment_shop});
            // console.log(res.data.apartment_shop);
        })
    }

    gotoBack = () => {
        this.props.navigation.goBack()
    };

    gotoHome = () => {
        this.props.navigation.navigate('services/index');
        this.props.setShopID(this.state.sub_list_index);
    };

    changeStatus = (index) => {
        let {down_status} = this.state;
        this.setState({...this.state, down_status: !down_status, list_index: index});
    };
    addShop = (subindex) => {
        let {shop_status} = this.state;
        this.setState({...this.state, shop_status: !shop_status});
    };

    changeShopStatus = (list_index, shop_id) => {
        // let self = this;
        // axios.get(API_BASE_URL + 'auth/apartment/changeShopStatus', {
        //     params: {
        //         shop_id: shop_id,
        //         user_phone: this.props.userInfo.user_phone
        //
        //     }
        // }).then(function (res) {
        //     if(res.data.status === 'success'){
        //         // this.props.navigation.navigate('register/apartment_shop');
        //         self.apartment_init();
        //     }
        //     else {
        //         alert(res.data.status);
        //     }
        // })
        this.setState({...this.state, list_index:list_index, sub_list_index: shop_id});
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

        return (
            <View style={{flex: 1}}>
                {
                    this.state.apartment_shop.map((item, index)=>{
                        return(
                            <View key={index} style={{marginBottom:10*em}}>
                                <View style={{height:80*em}}>
                                    <ScrollView showsHorizontalScrollIndicator={false}
                                                horizontal={true}
                                                style={{ flex: 1, backgroundColor:'#fff'}}>
                                        <View style={{width:W, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:20*em, paddingRight:20*em, paddingTop:30*em, paddingBottom:30*em}}>
                                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                                <Image source={require('../../images/arror.png')} style={{width:19*em, height:19*em}} />
                                                <Text style={{marginLeft:10*em, fontSize:20*em, fontWeight:'bold', color:'black'}}>{item.apartment_name}</Text>
                                            </View>

                                            <TouchableOpacity onPress={this.changeStatus.bind(this, index)}>
                                                {(this.state.down_status === true) && (this.state.list_index === index) ?
                                                    <Image style={{marginRight:20*em, width:30*em, height:16*em}} source={require('../../images/down.png')}/>
                                                    : <Image style={{marginRight:20*em, width:30*em, height:16*em}} source={require('../../images/up.png')}/>
                                                }
                                            </TouchableOpacity>

                                        </View>
                                        <TouchableOpacity style={{backgroundColor:'#f00', alignItems:'center', paddingLeft:40*em, paddingRight:40*em, paddingTop:30*em, paddingBottom:30*em}}>
                                                <Text style={{fontSize:20*em, fontWeight:'bold', color:'white'}}>删除</Text>
                                        </TouchableOpacity>
                                    </ScrollView>

                                </View>
                                {
                                    (this.state.down_status === true && this.state.list_index === index)?
                                    <View style={{backgroundColor:'white'}}>
                                        {
                                            item.shops.map((data, sub_index) => {
                                                return(
                                                    <View key={sub_index} style={{marginLeft:20*em, marginRight:20*em}}>
                                                        <TouchableOpacity>
                                                            <View style={{
                                                                backgroundColor:'white',
                                                                borderTopColor:'rgb(220,226,226)',
                                                                borderTopWidth:2*em,
                                                                padding:10*em,
                                                                alignItems:'center',
                                                                flexDirection:'row',
                                                                justifyContent:'space-between'
                                                            }}>
                                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                                    <Image source={{uri: SERVER_BASE_URL + data.portfolio}} style={{width:60*em, height:60*em}} />
                                                                    <View style={{marginLeft:10*em}}>
                                                                        <Text style={{fontSize:20*em, color:'#000'}}>{data.shop_name}</Text>
                                                                        <Text style={{fontSize:15*em}}>起送-￥20--_--营业时间-09：00---21：00</Text>
                                                                    </View>
                                                                </View>
                                                                <TouchableOpacity onPress={this.changeShopStatus.bind(this, index, data.shop_id)}>
                                                                    {
                                                                        this.state.list_index === index && this.state.sub_list_index === data.shop_id ?
                                                                            <Text style={{fontSize:20*em, paddingLeft:20*em, paddingRight:20*em, paddingTop:10*em, paddingBottom:10*em, borderWidth:1*em, borderRadius:30*em}}>正在使用</Text>
                                                                            :
                                                                            <ImageBackground source={require('../../images/使用.png')} style={{width:130*em, height:50*em, justifyContent:'center', alignItems:'center'}} resizeMode="cover">
                                                                                <Text style={{fontSize:20*em, paddingLeft:20*em, paddingRight:20*em, paddingTop:10*em, paddingBottom:10*em}}>使用商家</Text>
                                                                            </ImageBackground>
                                                                    }
                                                                </TouchableOpacity>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                    : null
                                }
                            </View>
                        )
                    })
                }
                <View style={{width:W, marginTop:20*em, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.gotoHome} style={{backgroundColor:'rgb(255,202,76)', paddingLeft:50*em, paddingRight:50*em,  paddingTop:20*em, paddingBottom:20*em,}}>
                        <Text style={{fontSize:25*em, color:'black'}}>新增地址</Text>
                    </TouchableOpacity>
                </View>
                <BottomNavBar buttons={buttons} />
            </View>
        )
    }
}
export default connect (state => ({
    userInfo: state.authReducer.userInfo
}),
    (dispatch) => ({
        setShopID: (shop_id) => {
            return dispatch(setShopID(shop_id));
        }
    }))(Scene)