import Dimensions from 'Dimensions';
export const W = Dimensions.get('window').width;
export const H = Dimensions.get('window').height;
export const em = W/640;

export const colors = {
	primary: '#2288ea',
	primaryBackground: '#2288ea',
	primaryForeground: '#fff',
	text: '#888',
	inputLabel: '#444',
	secondaryBackground: '#fff',
	secondaryForeground: '#2288ea',
	danger: '#f25c46',
	white: '#fff',
	background: '#F5FCFF'
};

export const fontSizes = {
	default: 24*em,
	small: 18*em,
	button: 26*em,
	sx: 15*em,
};