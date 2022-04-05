import React, {Component} from 'react';

import IndexScene from '../pages/services/index'
import CategoryScene from '../pages/services/category'
import CategorySearch from '../pages/services/category_search'
import AllOrders from '../pages/services/all_orders'
import Paydone from '../pages/services/paydone'
import MyAccountIndex from '../pages/myaccount/index'
import EstimateOrder from '../pages/services/estimate_order'
import Cateinfo from '../pages/services/cateinfo'
import orderdetail from '../pages/services/order_detail'
import {createStackNavigator} from 'react-navigation';

let headerOptions = {
};

const ServicesRouter = createStackNavigator({
	'services/index': {
		screen: IndexScene
	},
	'services/category': {
		screen: CategoryScene
	},
	'services/category_search': {
		screen: CategorySearch
	},
	'services/all_orders': {
		screen: AllOrders
	},
	'services/paydone':{
		screen:Paydone
	},
	'myaccount/index':{
		screen: MyAccountIndex
	},
	'services/estimate_order':{
		screen:EstimateOrder
	},
	'services/cateinfo': {
        screen: Cateinfo
    },
	'services/orderdetail':{
		screen: orderdetail
	}
}, {
    initialRouteName: 'services/index'
});

export default ServicesRouter;
