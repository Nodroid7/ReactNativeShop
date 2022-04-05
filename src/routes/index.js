import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import AuthLoginRouter from './auth/login'
import MyAccountRouter from './myaccount'
import ServicesRouter from './services'
import RegisterRouter from './register'

let headerOptions = {
	headerStyle: {
		display: 'none'
	}
};

const MainRouter = createStackNavigator({
	'auth/login': {
		screen:	AuthLoginRouter,
		navigationOptions: headerOptions
	},
    'services': {
        screen: ServicesRouter,
        navigationOptions: headerOptions
    },
	'myaccount': {
		screen: MyAccountRouter,
		navigationOptions: headerOptions
	},
	'register':{
		screen: RegisterRouter,
		navigationOptions: headerOptions
	}
}, {
    initialRouteName: 'register'
    // initialRouteName: 'services'
});

export default MainRouter;