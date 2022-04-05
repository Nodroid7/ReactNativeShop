import React, {Component} from 'react';

import LoginScene from '../../pages/auth/login/index';

import {createStackNavigator} from 'react-navigation';

let headerOptions = {
	
};

const AuthRouter = createStackNavigator({
	'auth/login/index': {
		screen: LoginScene
	},
}, {
	initialRouteName: 'auth/login/index'
});

export default AuthRouter;