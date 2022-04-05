import {StyleSheet} from 'react-native'

import {em, W, H, fontSizes, colors} from './uivar'

export const textStyles = StyleSheet.create({
    default: {
        fontSize: fontSizes.default, color: colors.text
    },
    small: {
        fontSize: fontSizes.small, color: colors.text
    },
    primary: {
        fontSize: fontSizes.default, color: colors.primary
    },
    smallPrimary: {
        fontSize: fontSizes.small, color: colors.primary
    }
})

export const formStyles = StyleSheet.create({
    formWrapper: {
        backgroundColor: '#fff', marginTop: 10*em, height: H-90
    },
    formInnerWrapper: {
        marginLeft: 20*em, marginRight: 20*em, width: 680*em
    },
    formField: {
        borderBottomWidth: 1, borderBottomColor: '#ccc',
        flexDirection: 'row', alignItems : 'flex-start',
        width: '40%'
    },
    fullformField: {
        borderBottomWidth: 1, borderBottomColor: '#ccc',
        flexDirection: 'row', alignItems : 'flex-start',
        width: '100%'
    },
    fieldLabelWrapper: {
        width: '25%', height: em*90,
        justifyContent: 'center', alignItems: 'center'
    },
    fieldLabel: {
        fontSize: fontSizes.default, color: colors.inputLabel,
    },
    fieldText: {
        width: '75%', height: em*90,
        fontSize: fontSizes.default, color: colors.text,
    },
    bottonFieldText: {
        marginTop: 8*em,
        marginLeft: 10*em,
        marginRight: 10*em,
        width: '96%',
        backgroundColor: 'white',
        height:  60*em
    },
})

export const actionButtonStyles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 0, left:0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        paddingLeft: em*20, paddingRight: em*20, paddingTop: em*20, paddingBottom: em*30
    }
})

export const twoButtonStyles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 0, left:0,
        width: '100%',
        backgroundColor: '#c5c5c5',
        paddingLeft: em*20, paddingRight: em*20, paddingTop: em*20, paddingBottom: em*30,
        display: 'flex', flexDirection: 'row'
    }
})
// added by kcg on 2019-06-22
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
        width : '30%'
    },
    linkTextWrapper2: {
        paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
        width : '75%'
    },
    linkText: {
        paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
    },
    linkTextDesable: {
        paddingLeft: 30 * em, paddingRight: 30 * em, paddingTop: 38 * em, paddingBottom: 38 * em,
        width : '70%',
        color: '#999999'
    },
    NoBackColorText: {
        display: 'flex', flexDirection: 'row'
    },
    message: {
        width : '70%',
    },
    linkTextWrapperSetting: {
        fontSize: fontSizes.large
    },
})

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
})