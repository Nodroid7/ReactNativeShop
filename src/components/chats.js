import React, {Component} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView} from 'react-native'
import {em,H, W} from '../config/uivar'
import {TopBar} from '../components/navbar'
import Modal from "react-native-modal";
export class Chat extends Component{
  state={
    message:'',
    set_clear_chat : false
  }
  setChatStatus(){
    this.setState({set_clear_chat:true})
  }
  onClose(){
      this.setState({set_clear_chat:false})
  }
  onClear(){
    this.props.onClear();
    this.setState({set_clear_chat:false})
  }
  onCancel(){
      this.setState({set_clear_chat:false})
  }
  renderChat_or_set(){
    if(this.state.set_clear_chat){
      return(
          <View style={{position:'absolute',bottom:0,backgroundColor:'#f0f0f0'}}>
            <Modal
                animationType="slide"
                transparent={true}
                isVisible = {this.state.set_clear_chat ===true}
                onRequestClose={() => {this.onClose()} }
                style = {{padding:0, margin:0}}
            >
              <ModalContent onCancel={()=>this.onCancel()} onclear={() =>this.onClear()} close={() =>this.onClose()}/>
            </Modal>
          </View>
      )
    }
    else{
      return(
          <View style={{position:'absolute',bottom:0,backgroundColor:'#f0f0f0'}}>
            <View style={{flexDirection:'row', width:W, height:50,alignItems:'center',display:'flex'}}>
              <TouchableOpacity>
                <Image style={{marginRight:15*em,marginLeft:10*em}} source={require('../images/blood_chat_sound.png')}/>
              </TouchableOpacity>
              <TextInput style={{width: 550*em, height:75*em,backgroundColor:'#fff',paddingLeft:20*em}} onChangeText={(data)=>{this.setState({message:data})}} placeholder="请输入事件主题"/>
              <TouchableOpacity onPress={this.props.addMessage.bind(this,this.state.message)} >
                <Image style={{marginRight:10*em,marginLeft:10*em}} source={require('../images/blood_chat_add.png')}/>
              </TouchableOpacity>
            </View>
          </View>
      )
    }
  }
  goBack(){
      this.props.onBack.bind(this);
  }
  render(){
    const {chatList} = this.props
    const {title} = this.props

    const chat_contents = chatList.map((item,i)=> {
      return(
        <TouchableOpacity key={i}>
          <View style={{backgroundColor:'#ffffff',marginTop:50*em}}>
            <View style={{alignItems:'center',marginBottom:20*em}}>
              <Text style={{fontSize:10}}>{item.time}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
              <View style={{borderRadius:10, marginRight:20*em, backgroundColor:'#2288ea',paddingTop:10*em,paddingBottom:10*em,paddingLeft:20*em,paddingRight:20*em}}>
                <Text style={{color:'white', maxWidth:W/2}}>{item.chat_content}</Text>
              </View>
              <Image style={{marginRight:10*em,marginLeft:10*em}} source={require('../images/blood_chat_character2.png')}/>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
    return(
      <View style={{position:'relative', backgroundColor: '#fff', flex: 1}}>
          <TopBar title={title}
                  goBackText="返回"
                  onBack={this.goBack.bind(this)} rightElement="清空" onRight={this.setChatStatus.bind(this)}/>
          {this.renderChat_or_set()}
        <View>
            <ScrollView style={{height:500}}>
                {chat_contents}
            </ScrollView>
        </View>
      </View>
    )
  }
}
export class FinishChat extends Component{
    state={
        message:'',
        set_clear_chat : false
    }
    setChatStatus(){
        this.setState({set_clear_chat:true})
    }
    onClose(){
        this.setState({set_clear_chat:false})
    }
    onClear(){
        this.props.onClear();
        this.setState({set_clear_chat:false})
    }
    onCancel(){
        this.setState({set_clear_chat:false})
    }
    renderChat_or_set(){
        return(
            <View style={{position:'absolute',bottom:0,backgroundColor:'#f0f0f0'}}>
                <View style={{flexDirection:'row', width:W, height:50,alignItems:'center',display:'flex'}}>
                    <TouchableOpacity>
                        <Image style={{marginRight:15*em,marginLeft:10*em}} source={require('../images/blood_chat_sound.png')}/>
                    </TouchableOpacity>
                    <TextInput style={{width: 550*em, height:75*em,backgroundColor:'#fff',paddingLeft:20*em}} onChangeText={(data)=>{this.setState({message:data})}} placeholder="请输入事件主题"/>
                    <TouchableOpacity onPress={this.props.addMessage.bind(this,this.state.message)} >
                        <Image style={{marginRight:10*em,marginLeft:10*em}} source={require('../images/blood_chat_add.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render(){
        const {chatList} = this.props
        const {title} = this.props

        const chat_contents = chatList.map((item,i)=> {
            return(
                <TouchableOpacity key={i}>
                    <View style={{backgroundColor:'#ffffff',marginTop:50*em}}>
                        <View style={{alignItems:'center',marginBottom:20*em}}>
                            <Text style={{fontSize:10}}>{item.time}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                            <View style={{borderRadius:10, marginRight:20*em, backgroundColor:'#2288ea',paddingTop:10*em,paddingBottom:10*em,paddingLeft:20*em,paddingRight:20*em}}>
                                <Text style={{color:'white', maxWidth:W/2}}>{item.chat_content}</Text>
                            </View>
                            <Image style={{marginRight:10*em,marginLeft:10*em}} source={require('../images/blood_chat_character2.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        })
        return(
            <View style={{position:'relative', backgroundColor: '#fff', flex: 1}}>
                <TopBar title={title} onBack={this.props.onBack.bind(this)}/>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#777', padding: 15*em}}><Text>{this.props.header}</Text></View>
                <View>
                    <ScrollView style={{height:500}}>
                        {chat_contents}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

class ModalContent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                style = {{paddingTop : (H - 230 * em), paddingBottom: 0,
                    paddingLeft : 190 * em, paddingRight : 190 * em}}
                activeOpacity={1}
                onPressOut={() => {this.props.close()}}
            >
              <TouchableWithoutFeedback onPress={()=>this.props.onclear()}>
                <View style={{
                    backgroundColor: '#fff', alignItems: 'center', alignSelf: 'center',
                    width: W, height: 80*em,
                    paddingTop: 20*em, paddingBottom: 10*em, paddingLeft: 40*em, paddingRight: 40*em,
                    }}>
                  <Text>清空聊天记录</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={{height:20*em}}>

              </View>
              <TouchableWithoutFeedback onPress={()=>this.props.onCancel()}>
                <View style={{
                    backgroundColor: '#fff', alignItems: 'center', alignSelf: 'center',
                    width: W, height: 80*em,
                    paddingTop: 20*em, paddingBottom: 10*em, paddingLeft: 40*em, paddingRight: 40*em,
                    }}>
                  <Text>取消</Text>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
        )
    }
}