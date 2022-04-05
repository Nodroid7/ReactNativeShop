import React, {Component} from 'react'
import {em} from '../config/uivar'
import {View, TouchableWithoutFeedback, Image, Animated} from 'react-native'

export class AccordionCustom extends Component{
  constructor(props) {
    super(props);

    this.icons = {
      'up'    : require('../images/个人纳税_图标_收起.png'),
      'down'  : require('../images/个人纳税_图标_展开.png')
    };

    this.state = {
      firstLoaded: false,
      expanded: false,
      minHeight: 0,
      maxHeight: this.props.childHeight,
      animation: new Animated.Value(0),
      marginTopWidth: 0
    };
  }

  toggle = () => {
    let { expanded, minHeight, maxHeight, animation } = this.state;
    let initialValue = expanded ? maxHeight : minHeight;
    let finalValue = expanded ? minHeight : maxHeight;

    let marginTopWidth = 0;
    if(expanded === false)
      marginTopWidth = 2;
    this.setState({
      ...this.state,
      expanded: !expanded,
      marginTopWidth: marginTopWidth
    });

    animation.setValue(initialValue);
    Animated.timing(animation, {
      toValue: finalValue,
      delay: 100,
      duration: 200,
    }).start();
  };

  setMinHeight = event => {
    // this.setState({
    //   ...this.state,
    //   minHeight: 0
    // });
    // const { animation } = this.state;
    // animation.setValue(0);
  };

  setMaxHeight = event => {
    // this.setState(
    //   {
    //     ...this.state,
    //     maxHeight: event.nativeEvent.layout.height,
    //   },
    //   () => {
    //     // const { expanded, animation, maxHeight } = this.state;
    //     // let value = expanded ? maxHeight : 0;
    //     // animation.setValue(value);
    //   }
    // );
  };

  render() {
    let {animation} = this.state;
    let {children} = this.props;

    let icon = this.icons['down'];
    if(this.state.expanded){
      icon = this.icons['up'];
    }
    return (
      <View>
        <Animated.View style={{ overflow:'hidden', height: animation}}>
          <View style={[{marginTop: 1}, this.props.style]}>
            {children}
          </View>
        </Animated.View>
        <TouchableWithoutFeedback onPress={this.toggle}>
          <View style={{alignItems: 'center', backgroundColor: 'white', padding: 20*em
          }}>
            <Image source={icon} style={{width:40*em, height:22*em}}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
