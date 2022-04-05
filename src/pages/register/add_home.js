import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, Touchable} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {em} from '../../config/uivar'
import { SmallPrimaryButton} from '../../components/elements5'
import {Tiny_Image} from "../../components/elements4";
import {BottomNavBar} from "../../components/bottom-nav-bar"
import {Select2Field} from "../../components/inputs"
import Modal from 'react-native-modal'
import {TextButton, PrimaryButton, TextWithImageButton} from '../../components/buttons';
import { CascadePicker } from 'react-cascadepicker-by-rjs'
const axios = require('axios');
import {API_BASE_URL} from "../../config/app";

class Scene extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };
    alphabet_status = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    componentWillMount(): void {
        this.getApartmentData();
    }

    getApartmentData() {
        let self = this;
        axios.get(API_BASE_URL+'auth/apartment/getApartmentData', {
            params:{}
        }).then(function(res) {
            self.setState({apartment_data: res.data.apartment_data});
            // console.log(this.state.area_data);
            // console.log(res.data.area_data);
        })

    }

    contain = {};
    constructor(props){
        super(props);
        this.alphabet_status = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.state = {
            search: '',
            validationSuccess: false,
            formData: {
                company_name: '',
                social_code: '',
                area_addy: '',
                detail_addy: ''
            },
            apartment_data: [],
            isAreaShow: false,
            recommend_areas: ['威远城','威远城','威远城','威远城','威远城','威远城','威远城','威远城'],
            itemIndex: null,

            valueGroups: {
                title: 'Mr.',
                firstName: 'Micheal',
                secondName: 'Jordan'
            },
            optionGroups: {
                title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
                firstName: ['John', 'Micheal', 'Elizabeth'],
                secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
            },
            alphabet:[{
                name:'A',
            },{
                name:'B',
            },{
                name:'C'
            },{
                name:'D'
            },{
                name:'E'
            },{
                name:'F'
            },{
                name:'G'
            },{
                name:'H'
            },{
                name:'I'
            },{
                name:'J'
            },{
                name:'K'
            },{
                name:'L'
            },{
                name:'M'
            },{
                name:'N'
            },{
                name:'O'
            },{
                name:'P'
            },{
                name:'Q'
            },{
                name:'R'
            },{
                name:'S'
            },{
                name:'T'
            },{
                name:'U'
            },{
                name:'V'
            },{
                name:'W'
            },{
                name:'X'
            },{
                name:'Y'
            },{
                name:'Z'
            }]
        };

    }
    // findalphabet= (name)=>{
    //     var number =0;
    //
    //     for(var i=0;i<this.area_data.length;i++){
    //         this.contain[i]= this.area_data[i].contents.length;
    //     }
    //     for(i=0;i<this.area_data.length;i++){
    //         if(name == this.area_data[i].filter){
    //             for(j=0;j<i;j++){
    //                 number = number + this.area_data[j].contents.length;
    //             }
    //             // alert(number);
    //             // alert(i);
    //             var heigth = i*58*em + number*92*em;
    //             this.scrollview1.scrollTo({x:0,y:height,animated:true})
    //         }
    //     }
    // };
    onContentChange = () => {
        // this.scrollview1.scrollTo({x:0,y:120,animated:true})
    };
    handleChange = (name, value) => {
        this.setState(({valueGroups}) => ({
            valueGroups: {
                ...valueGroups,
                [name]: value
            }
        }));
    };

    gotoBack = () => {
        this.props.navigation.goBack()
    };

    gotoHome = () => {
        this.props.navigation.navigate('services/index')
    };

    onChangeField = (fieldName, fieldValue) => {
        this.state.formData[fieldName] = fieldValue;

        const { company_name, social_code, detail_addy, area_addy } = this.state.formData;
        if (company_name !== '' && social_code !== '' && detail_addy !== '' && area_addy !== '') {
            this.setState({
                ...this.state,
                validationSuccess: true,
            })
        }
        else {
            this.setState({
                ...this.state,
                validationSuccess: false
            })
        }
    };


    updateSearch = search => {
        this.setState({ search });
    };

    showAreaModal = () => {
        this.setState({isAreaShow: true});
    };
    closeAreaModal = () => {
        this.setState({isAreaShow: false});
    };
    selectItem(id){
        this.setState({itemIndex: id});
    }
    changeAlphabetStatus (index){
        // let status = this.alphabet_status;
        // status[index] = true;
        // this.setState({alphabet_status: status});
        this.alphabet_status[index] = true;
        // return (<View><Text>fdsafdfa</Text></View>);
    };
    render(){

        const buttons = [
            {
                label: ' 首页',
                normalImage: require('../../images/icons/home.png'),
                isRead: false,
                action: this.gotoHome.bind(this)
            }, {
                label: ' 返回',
                normalImage: require('../../images/icons/back.png'),
                isRead: false,
                action: this.gotoBack.bind(this)
            }
        ];
        const { search } = this.state;
		const icon = () => {
			return (
				<Image source={require('../../images/icons/search.png')} style={{width: 30*em, height: 24*em, resizeMode: 'contain'}}/>
			)
		};
        const {recommend_areas} = this.state;
        const area_data1 = [{
            id: 1,
            name: '1',
            children: [{
                id: 11,
                name: '1-1',
                children: [{
                    id: 111,
                    name: '1-1-1'
                }]
            }]
        },{
            id: 2,
            name: '2',
            children: [{
                id: 21,
                name: '2-1',
                children: [{
                    id: 211,
                    name: '2-1-1'
                }, {
                    id: 212,
                    name: '2-1-2'
                }]
            }]
        }];
        return(
			<View style={{backgroundColor: '#f6f6f6', flex: 1}}>
				<View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
					<View style={{width: '11%'}}>
						<TextWithImageButton
							title='选择'
							onPress={this.showAreaModal}
							textStyle={{
								backgroundColor: '#fff',
							}}
							image={require('../../images/icons/down.png')}
							textColor={{color: '#444'}}
						/>
					</View>
					<View style={{width: '86%', borderWidth: 0*em, marginLeft:10*em}}>
						<SearchBar placeholder="请输A小区名称"
						   onChangeText={this.updateSearch}
						   value={search}
						   searchIcon = {icon()}
						   leftIconContainerStyle={{}}
						   rightIconContainerStyle = {{display: 'none'}}
						   containerStyle={{backgroundColor: '#fff', height: 90*em, borderBottomWidth: 0*em, borderTopWidth: 0*em}}
						   inputContainerStyle={{backgroundColor: '#ddd', borderColor: '#999', borderWidth: 1*em, height: 35*em, borderBottomColor: '#888', borderBottomWidth: 1*em}}
						   inputStyle={{marginLeft: 0, fontSize: 24*em, padding: 0}}
						/>
					</View>
				</View>
                <ScrollView style={{top:0, marginBottom:80*em}}>
                    {
                        this.state.apartment_data.map((item, index)=>{
                            return (
                                <View key={index}>
                                    {
                                        this.alphabet_status['Z'.charCodeAt(0) - item.alphabet.charCodeAt(0)] === false ?
                                            <Text style={{fontWeight: 'bold', padding: 13*em}}>{item.alphabet}</Text>
                                            :
                                            null
                                    }
                                    {
                                        this.alphabet_status['Z'.charCodeAt(0) - item.alphabet.charCodeAt(0)] === false ?
                                            this.changeAlphabetStatus('Z'.charCodeAt(0) - item.alphabet.charCodeAt(0))
                                        :
                                            null
                                    }
                                    <View style={{backgroundColor: '#fff'}}>
                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('register/register_address', {apartment: item.apartment_name})}} style={{borderBottomWidth: 1*em, borderColor: '#999', padding: 15*em}}>
                                            <Text style={{fontSize: 24*em, fontWeight: 'bold', color: '#333'}}>{item.apartment_name}</Text>
                                            <Text style={{fontSize: 20*em, color: '#888'}}>{item.province + item.city + item.area}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
				</ScrollView>
                <BottomNavBar chosenButton={2} buttons={buttons} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    isVisible={this.state.isAreaShow}
                    onBackdropPress={this.closeAreaModal}
                    style={{justifyContent:'center'}}
                >
                    <View style={{width:'111%', position:'absolute', bottom:-30*em, height:600*em, backgroundColor:'#fff', marginLeft:-30*em}}>
                        <View style={{padding:20*em, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#bbb'}}>
                            <TouchableOpacity>
                                <Text style={{color:'rgb(4,137,197)'}}>常用地区</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style={{color:'rgb(4,137,197)'}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:200*em}}>
                            <ScrollView>
                                <View style={{flexWrap: 'wrap', flexDirection:'row', justifyContent:'flex-start', paddingLeft:25*em, paddingRight:20*em}}>
                                    {
                                        this.state.recommend_areas.map((item, index) => {
                                            return(
                                                <View key={index}>
                                                {
                                                    this.state.itemIndex === index
                                                        ?
                                                        <View style={{paddingTop:25*em, paddingBottom:25*em}}>
                                                            <TouchableOpacity style={{backgroundColor:'#eee', borderRadius:20*em, borderWidth:1*em, paddingTop:10*em, paddingBottom:10*em, paddingLeft:60*em, paddingRight:60*em}} onPress={this.selectItem.bind(this, index)}>
                                                                <Text style={{color:'#000'}}>{item}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                        :
                                                        <View style={{paddingTop:25*em, paddingBottom:25*em}}>
                                                            <TouchableOpacity style={{paddingTop:10*em, paddingBottom:10*em, paddingLeft:60*em, paddingRight:60*em}} onPress={this.selectItem.bind(this, index)}>
                                                                <Text>{item}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                }
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{padding:20*em, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#bbb'}}>
                            <TouchableOpacity>
                                <Text style={{color:'rgb(4,137,197)'}}>选择地区</Text>
                            </TouchableOpacity>
                        </View>
                        <AreaPicker label="所在地区" placeholder="请选择所在地区" name="area_addy" onChangeField={this.onChangeField.bind(this)} pickerName="请选择所在地区" data={area_data1} value={this.state.formData.area_addy} />

                        {/*<Picker*/}
                            {/*optionGroups={optionGroups}*/}
                            {/*valueGroups={valueGroups}*/}
                            {/*onChange={this.handleChange} />*/}
                    </View>
                </Modal>
                <View style={{position:'absolute',flexDirection:'column',right:10,top:113,}}>
                    {
                        this.state.alphabet.map((item,index)=>{
                            return(
                                <View key={index}>
                                    <TouchableOpacity >
                                        <Text style={{fontSize:19*em,color:'rgb(4,137,197)',fontWeight:'bold',marginBottom:2*em}}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
			</View>
        )
    }
}

class AreaPicker extends Component {
    componentWillMount () {
        let data_src = this.props.data;
        let data1 = [];
        let data2 = [];
        let data3 = [];
        data_src.map((item) => {
            const { id, name } = item;
            data1.push({id, name})
        });
        this.setState({
            data1,
            data2,
            data3,
            data_src
        })
    }

    onWheelChange (item, index, wheelNumber) {
        if (wheelNumber === 0) {
            const { data_src } = this.state;
            let data2 = [];
            let data3 = [];
            data_src.map((item_src) => {
                if (item_src.id === item.value) {
                    item_src.children.map((item2) => {
                        const { id, name } = item2;
                        data2.push({id, name})
                    })
                }
            });
            this.setState({
                ...this.state,
                data2,
                data3
            })
        }
        else if (wheelNumber === 1) {
            const { value } = item;
            const { data_src } = this.state;
            let data3 = [];
            data_src.map((item_src) => {
                const { children } = item_src;
                children.map((item2) => {
                    const { id, children } = item2;
                    if (id === value) {
                        children.map((item3) => {
                            const { id, name } = item3;
                            data3.push({id, name});
                        })
                    }
                })
            })
            this.setState({
                ...this.state,
                data3
            })
        }
    }

    onChangeField (fieldText, selectIndex, fieldValue) {
        let fieldName = this.props.name;
        this.props.onChangeField(fieldName, fieldValue);
    }

    render () {
        let { value } = this.props;
        if (!value) {
            value = this.props.placeholder;
        }
        let textStyle = {
            textAlign: 'left',
            fontSize: 26 * em
        };
        if (!this.props.value) {
            textStyle = {
                ...textStyle,
                color: '#999999'
            }
        }

        const { itemStyle, itemLabelStyle, labelTextStyle, itemInfoStyle } = styles;

        return (
            <View>
                <View style={[itemStyle, {backgroundColor: '#ffffff'}]}>
                    <CascadePicker
                        data={[this.state.data1, this.state.data2, this.state.data3]}
                        onWheelChange={this.onWheelChange.bind(this)}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    titleStyle: {
        height: 60 * em,
        paddingLeft: 30 * em,
        justifyContent: 'center'
    },
    itemStyle: {
        height: 100 * em,
        paddingLeft: 30 * em,
        paddingRight: 30 * em,
        backgroundColor: '#ffffff',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1 * em,
        flexDirection: 'row'
    },
    itemLabelStyle: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 21 * em
    },
    itemInfoStyle: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    labelTextStyle: {
        fontSize: 26 * em,
        color: '#666666'
    },
    infoTextStyle: {
        fontSize: 26 * em,
        color: '#333333'
    }
};
export default Scene;