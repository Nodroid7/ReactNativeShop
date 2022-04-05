import React, {Component} from 'react';

import IndexScene from '../pages/register/index'
import RegisterAddress from '../pages/register/register_address'
import AddHome from '../pages/register/add_home'
import ApartmentShop from '../pages/register/apartment_shop'
import {createStackNavigator} from 'react-navigation';

let headerOptions = {

};

const MyAccountRouter = createStackNavigator({
    'register/index': {
        screen: IndexScene
    },
    'register/register_address': {
        screen: RegisterAddress
    },
    'register/add_home': {
        screen: AddHome
    },
    'register/apartment_shop':{
        screen: ApartmentShop
    }
}, {
    initialRouteName: 'register/index'
});

export default MyAccountRouter