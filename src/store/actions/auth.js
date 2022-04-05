export function setLoggedUser(userInfo) {
	return {
		type: 'SET_LOGGED_USER',
		data: {userInfo: userInfo}
	}
}

export function setUserPassword(password) {
	return {
		type: 'SET_USER_PASSWORD',
		data: {password: password}
	}
}

export function unsetLoggedUser() {
	return {
		type: 'UNSET_LOGGED_USER'
	}
}

export function setShopID(shop_id) {
	return {
		type: 'SET_SHOP_ID',
		data: {shop_id: shop_id}
	}
}

