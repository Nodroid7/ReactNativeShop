const initialState = {
	isAuthenticated: false,
	userInfo: null,
	shop_id: null
};

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'SET_LOGGED_USER':
			const {userInfo} = action.data;
			return {
				...state,
				isAuthenticated: true,
				userInfo: userInfo
			};
		case 'SET_SHOP_ID':
			const {shop_id} = action.data;
			return {
				...state,
				shop_id: shop_id
			}

	}
	return state
};
export default authReducer
