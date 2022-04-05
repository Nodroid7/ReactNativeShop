import React, {Component} from 'react'
import {StyleSheet, TouchableOpacity, View, ImageBackground, Text, Image} from 'react-native'
import {W, H, em} from '../config/uivar'

export const linkStyles = StyleSheet.create({
  linkWrapper : {
    paddingTop : 11 * em
  },
  linkInnerWrapper: {
    borderTopWidth:1*em, borderColor:'#c8c8c8' ,backgroundColor: '#fff',
    display: 'flex', flexDirection: 'row'
  },
  linkTextWrapper: {
    paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em
  },
  linkTextWrapper1: {
    paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
    width : '25%'
  },
  linkTextWrapper2: {
    paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
    width : '75%'
  },
  linkTextDesable: {
    paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
    width : '70%',
    color: '#999999'
  },
  message: {
    width : '70%',
  }
});

export const message = StyleSheet.create({
  container: {
    flex: 5
  },
  container_transffer: {
    flex: 5,
    marginLeft: -50*em
  },
  user: {
    marginLeft: 20*em,
    flex: 2,
  },
  user_transffer: {
    marginLeft: 50*em,
    flex: 2,
  },
  empty: {
    flex: 3
  },
});