import React, {Component} from 'react';

import IndexScene from '../pages/myaccount/index'
import PointHistScene from '../pages/myaccount/point-hist'
import EvalGoodsScene from '../pages/myaccount/eval-goods'
import News from '../pages/myaccount/news'
import NewsDetail from '../pages/myaccount/news-detail'
import Chat from '../pages/myaccount/chat'
import Feedback from '../pages/myaccount/feedback'
import FeedbackDetail from '../pages/myaccount/feedback-detail'
import version from '../pages/myaccount/version'
import goodspage from '../pages/myaccount/goods-page'
import goodpage from '../pages/myaccount/good-page'
import goodsdetail from '../pages/myaccount/goods-detail'
import goodsorder from '../pages/myaccount/goods-order'
import goodsorderapart from '../pages/myaccount/goods-order-apart'
import goodsorderfinish from '../pages/myaccount/goods-order-finish'
import registScene from '../pages/register/index'

import {createStackNavigator} from 'react-navigation';

let headerOptions = {

};

const MyAccountRouter = createStackNavigator({
	'register/index':{
		screen: registScene
	},
	'myaccount/index': {
		screen: IndexScene
	},
	'myaccount/point-hist':{
		screen: PointHistScene
	},
	'myaccount/eval-goods':{
		screen: EvalGoodsScene
	},
	'myaccount/news':{
		screen: News
	},
	'myaccount/feedback':{
		screen: Feedback
	},
	'myaccount/feedbackdetail':{
		screen: FeedbackDetail
	},
	'myaccount/news-detail':{
		screen: NewsDetail
	},
	'myaccount/chat':{
		screen: Chat
	},
	'myaccount/version':{
		screen: version
	},
	'myaccount/goods-page':{
	    screen: goodspage
    	},
	'myaccount/goods-detail':{
		screen: goodsdetail
	},
	'myaccount/goods-order':{
		screen: goodsorder
	},
	'myaccount/goods-order-apart':{
		screen: goodsorderapart
	},
	'myaccount/goods-order-finish':{
		screen:goodsorderfinish
	},
	'myaccount/good-page':{
		screen:goodpage
	}
}, {
	initialRouteName: 'myaccount/index'
});

export default MyAccountRouter;