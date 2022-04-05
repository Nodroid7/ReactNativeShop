import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements'
import {BottomBar} from "../../components/bottombar";
import {PagerDotIndicator, IndicatorViewPager} from 'React-Native-ViewPager-master';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Price }from '../../components/price'
import {connect} from 'react-redux'
import {setCategory} from "../../store/actions/services";


import {em, W} from '../../config/uivar'
const axios= require('axios');
import {API_BASE_URL, SERVER_BASE_URL} from "../../config/app";

const styles = StyleSheet.create({
    header: {paddingLeft: 20*em, paddingRight: 20*em, height: 90*em, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white'},
    headerImgContainer: {justifyContent: 'center'},
    shapeImage: {width: 22*em, height: 27*em},
    weather: {flexDirection: 'row'},
    infoContainer: {paddingRight: 10*em},
    degree:{fontSize: 15*em, color: 'rgb(31, 31, 31)', fontWeight: 'bold'},
    weatherType:{fontSize: 15*em, color: 'rgb(31, 31, 31)'},
    weatherImage: {width: 50*em, height: 36*em},
    searchContainerStyle: {backgroundColor: 'rgb(255, 202, 76)', height: 80*em, justifyContent: 'center', paddingLeft: 20*em, paddingRight: 20*em},
    searchInputContainerStyle: {backgroundColor: 'white', borderBottomWidth: 0, height: 60*em},
    searchInputStyle: {fontSize: 18*em},
});

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    constructor() {
        super();
        this.state = {
            bottom_status:0,
            categoryName:null,
        }
    }

    goCategory = () => {
        this.props.navigation.navigate('services/category');
    };

    goTo = (data) => {
        switch (data) {
            case 'index':
                this.props.navigation.navigate('services/' + data);
                break;
            case 'all_orders':
                this.props.navigation.navigate('services/' + data);
                break;
            case 'myaccount/index':
                this.props.navigation.navigate(data);
                break;
        }
    };
    changeBottomStatus = (id) => {
        this.setState({bottom_status:id});
    };
    setCategory(categoryName,categories,underCategory){
        var i,categoryId ;
        for( i = 0; i < categories.length; i++){
            if(categories[i].name === categoryName){
                categoryId = categories[i].id;
                break;
            }
        }
        this.props.setCategory(categoryName,i,underCategory,categoryId);
        this.setState({categoryName: this.props.categoryInfo});
        this.goCategory();
    }
    render(){
        const buttons = [{
            label: '首页',
            normalImage: require('../../images/shouye.png'),
            chosenImage: require('../../images/shouye-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'index')
        }, {
            label: '订单',
            normalImage: require('../../images/dingdan.png'),
            chosenImage: require('../../images/dingdan-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'all_orders')
        },{
            label: '我的',
            normalImage: require('../../images/wode.png'),
            chosenImage: require('../../images/wode-on.png'),
            isRead: false,
            action: this.goTo.bind(this, 'myaccount/index')
        }
        ];
        return(
			<View style={{flex:1}}>
				<ScrollView>
					<View style={styles.header}>
						<View style={styles.headerImgContainer}>
							<Image source={require('../../images/Service/header-shape.png')} style={styles.shapeImage}/>
						</View>
						<View style={{justifyContent: 'center'}}>
							<View style={styles.weather}>
								<View style={styles.infoContainer}>
									<Text style={styles.degree}>-10°</Text>
									<Text style={styles.weatherType}>多云天</Text>
								</View>
								<View>
									<Image source={require('../../images/Service/weather.png')} style={styles.weatherImage}/>
								</View>
							</View>
						</View>
					</View>
					<Input containerStyle={styles.searchContainerStyle} inputContainerStyle={styles.searchInputContainerStyle} inputStyle={styles.searchInputStyle}
						   placeholder='搜索商品名称'
						   leftIcon={
							   <Icon name="remove" size={15} />
                           }
					/>
					<CategoryComponent setCategory={this.setCategory.bind(this)}/>
					<Banner/>
					<HotProducts goCategory={this.goCategory}/>
					<PackageProducts/>
					<BestProducts/>
				</ScrollView>
				<BottomBar chosenButton={this.state.bottom_status} buttons={buttons} />
			</View>
        )
    }
}
export default connect(state=>({
     categoryInfo : state.serviceReducer.categoryInfo,
    shop_id: state.authReducer.shop_id

}), (dispatch) => ({
     setCategory: (categoryInfo,selectedCategory,underCategory,categoryId) => dispatch(setCategory(categoryInfo,selectedCategory,underCategory,categoryId))
}))(Scene)

const categoryStyles = StyleSheet.create({
    category:{height: 350*em, paddingLeft: 20*em, paddingRight: 20*em, paddingTop: 25*em, backgroundColor: 'white'},
    categoryItem: {width: 150*em, height: 95*em, justifyContent: 'space-between', alignItems: 'center'},
    categoryText: {fontSize: 18*em, color: 'rgb(26, 26, 26)'}
});
class CategoryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            count: 0,
            underCategories:[]
        }
    }
    componentWillMount(): void {
        let  self = this;
        var countCategories = 0;
        axios.get(API_BASE_URL + 'services/goods/get-categories')
            .then(function (res) {
                let {data} = res;
                data.good_list.map((item,index) => {
                    if(item.parent_id === 0){
                        self.state.categories.push({name: item.name, path: item.url, id:item.id});
                        self.forceUpdate();
                        countCategories++;
                    }
                });
                self.setState({count: countCategories/8});
                let inself = self;
                var underCategoryTemp = [];
                axios.get(API_BASE_URL + 'services/goods/get-categories')
                    .then(function (res) {
                        let{data} = res;
                        for(var i = 0 ; i < countCategories; i++){
                            for(var j = 0; j < data.good_list.length; j++){
                                if(inself.state.categories[i].id === data.good_list[j].parent_id){
                                    underCategoryTemp.push({name:data.good_list[j].name, id:data.good_list[j].id});
                                }
                            }
                            inself.state.underCategories.push(underCategoryTemp);
                            underCategoryTemp = [];
                        }
                    })
        });
    }
    setCategory(categoryName){
        this.props.setCategory(categoryName,this.state.categories,this.state.underCategories)
    }
    min = (a, b)=> {
        return (a > b) ? a : b;
    };
    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={{backgroundColor:'rgb(255, 202, 76)', width:30*em}} pageCount={this.state.count} />;
    }
    render(){
        let changedCategories = [];
        let i;
        for ( i = 0; i < this.state.categories.length; i += 8) {
            changedCategories.push(this.state.categories.slice(i, i + 8));
        }
        return(
			<View style={categoryStyles.category}>
                {
                    <IndicatorViewPager indicator={this._renderDotIndicator()} style={{height:320*em}}>
                    {
                        changedCategories.map((categories, index) => {
                            let viewStyle = {flexDirection: 'row', flexWrap:'wrap'};
                            if (index !== changedCategories.length)
                            viewStyle = {...viewStyle, paddingBottom: 40 * em};
                            return (
                            <View style={viewStyle} key={index}>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <TouchableOpacity onPress={this.setCategory.bind(this,category.name)} style={[categoryStyles.categoryItem,{marginBottom:40*em}]} key={index}>
                                            <Image source={{uri: SERVER_BASE_URL + 'image/'+category.path}} style={{width:100*em,height:100*em}} resizeMode={'stretch'}/>
                                            <Text style={categoryStyles.categoryText}>{category.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            </View>
                            )
                        })
                    }
                    </IndicatorViewPager>
                }
			</View>
        );
    }
}
const bannerStyles = StyleSheet.create({
    container:{paddingTop: 10*em, paddingBottom: 10*em},
    backImage:{width: W, height: 170*em}
});
class Banner extends Component {
    render() {
        return (
			<View style={bannerStyles.container}>
				<Image source={require('../../images/Service/折扣.png')} style={bannerStyles.backImage}/>
			</View>
        )
    }
}
const hotStyles = StyleSheet.create({
    container:{padding: 20*em, backgroundColor: 'white'},
    bannerContainer: {paddingBottom: 20*em, flexDirection: 'row', alignItems: 'center'},
    banner: {width: 225*em, height: 5*em, backgroundColor: 'rgb(225, 225, 225)'},
    titleContainer: {paddingLeft: 20*em, paddingRight: 20*em},
    title: {fontSize: 28*em, color: 'rgb(31,31,31)', fontWeight: 'bold'},
    imgContainer: {flexDirection: 'row', justifyContent: 'space-between'},
    img: {width: 193*em, height: 193*em},
    productTitle: { color: 'rgb(31,31,31)', fontWeight: 'bold',width:150*em,textAlign: 'center'},
    money: {fontSize: 20*em, color: 'rgb(253, 140, 73)'},
    unit: {fontSize: 10*em, color: 'rgb(253, 140, 73)'}
});
class HotProducts extends Component {
    constructor(){
        super();
        this.state = {
            hotProducts: []
        }
        ;
    }
    componentWillMount(): void {
        let self = this;
        axios.get(API_BASE_URL + 'services/goods/get-hot')
            .then(function (res) {
                let {data} = res;
                 self.setState({hotProducts : data.hot_list});
            })
    }

    render() {
        return (
			<View style={hotStyles.container}>
				<View style={hotStyles.bannerContainer}>
					<View style={hotStyles.banner}>
					</View>
					<View style={hotStyles.titleContainer}>
						<Text style={hotStyles.title}>
							热销商品
						</Text>
					</View>
					<View style={hotStyles.banner}>
					</View>
				</View>
				<View style={hotStyles.imgContainer}>
                    {
                        this.state.hotProducts.map((product, index)=>
							index < 3 ? <TouchableOpacity onPress={this.props.goCategory} key={index}>
								<View style={{justifyContent: 'space-between', alignItems: 'center'}}>
									<Image source={{uri: SERVER_BASE_URL + 'image/' + product.url}} style={hotStyles.img}  resizeMode={'stretch'}/>
									<Text style={hotStyles.productTitle}>{product.title}</Text>
									<View style={{flexDirection: 'row'}}>
										<View style={{justifyContent: 'flex-end'}}>
											<Text style={hotStyles.unit}>yuan</Text>
										</View>
										<Text style={hotStyles.money}>{product.price}</Text>
									</View>
								</View>
							</TouchableOpacity>:null
                        )
                    }
				</View>

			</View>
        )
    }
}
class PackageProducts extends Component {
    constructor(){
        super();
        this.state ={
            package_list:[]
        }

    }
    componentWillMount(): void {
        var self = this;
        axios.get(API_BASE_URL + 'services/goods/get-package')
            .then(function (res) {
                let {data} = res;
                self.setState({package_list: data.package});
            })
    }

    render() {
        return (
			<View style={hotStyles.container}>
				<View style={hotStyles.bannerContainer}>
					<View style={hotStyles.banner}>
					</View>
					<View style={hotStyles.titleContainer}>
						<Text style={hotStyles.title}>
							折扣套餐
						</Text>
					</View>
					<View style={hotStyles.banner}>
					</View>
				</View>
				<View style={hotStyles.imgContainer}>
                    {
                        this.state.package_list.map((product, index)=>
                            index < 3 ? <TouchableOpacity style={{justifyContent: 'space-between', alignItems: 'center'}} key={index}>
								<Image source={{uri: SERVER_BASE_URL + 'image/' + product.url}} style={hotStyles.img}/>
                                    <Text style={hotStyles.productTitle}>{product.package_title}</Text>
								<View style={{flexDirection: 'row'}}>
									<View style={{justifyContent: 'flex-end'}}>
										<Text style={hotStyles.unit}>yuan</Text>
									</View>
									<Text style={hotStyles.money}>{product.package_price}</Text>
								</View>
							</TouchableOpacity>:null
                        )
                    }
				</View>

			</View>
        )
    }
}
const bestStyles = StyleSheet.create({
    imgRowContainer: {flexDirection: 'row', justifyContent: 'space-between'},
    item: {borderRadius: 5},
    img: {width: 295*em, height: 167*em},
    detail: {backgroundColor: 'rgb(243, 243, 243)', paddingLeft: 20*em, paddingRight: 20*em, height: 60*em,justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'},
    name: {fontSize: 20*em, color: 'rgb(31,31,31)'},
});
class BestProducts extends Component{
    min = (a, b)=> {
        return (a < b) ? a : b;
    };
    constructor(){
        super();
        this.state = {
            best_list:[]
        }
    }
    componentWillMount(): void {
        var self = this;
        axios.get(API_BASE_URL + 'services/goods/get-best')
            .then(function (res) {
                let {data} = res;
                self.setState({best_list: data.best});
            })
    }
    render() {

        const bestProducts = [
            {name: '美味Pizza', path: require('../../images/Service/best1.png'), price: 25},
            {name: '美味炸酱面', path: require('../../images/Service/best2.png'), price: 25},
            {name: '美味炸鸡', path: require('../../images/Service/best3.png'), price: 25},
            {name: '美味意大利面', path: require('../../images/Service/best4.png'), price: 25}
        ];
        let changedProducts = [];
        const rowCnt = 2;
        for (let i = 0; i * rowCnt < this.state.best_list.length; i++) {
            const end = this.min((i + 1) * rowCnt, this.state.best_list.length);
            changedProducts.push(this.state.best_list.slice(i * rowCnt, end));
        }
        return (
            <View style={[hotStyles.container,{marginBottom: 100*em}]}>
                <View style={hotStyles.bannerContainer}>
                    <View style={hotStyles.banner}>
                    </View>
                    <View style={hotStyles.titleContainer}>
                        <Text style={hotStyles.title}>
                            为你优选
                        </Text>
                    </View>
                    <View style={hotStyles.banner}>
                    </View>
                </View>
                {
                    changedProducts.map((products, index) => {
                        const rowStyle = (index !== products.length ? {...bestStyles.imgRowContainer, paddingBottom: 10*em}: bestStyles.imgRowContainer);
                        return (
                            <View style={rowStyle} key={index}>
                                {
                                    products.map((product, index) => {
                                        return (
                                            <TouchableOpacity style={bestStyles.item} key={index}>
                                                <Image source={{uri: SERVER_BASE_URL + 'image/' + product.url}} style={bestStyles.img}/>
                                                <View style={bestStyles.detail}>
                                                    <Text style={bestStyles.name}>{product.title}</Text>
                                                    <Price price={product.price}/>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }

            </View>
        )
    }

}
