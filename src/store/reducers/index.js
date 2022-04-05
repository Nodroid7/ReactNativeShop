import {combineReducers} from 'redux'

import authReducer from './auth'
import serviceReducer from './services'

const reducer = combineReducers({
  authReducer, serviceReducer
});

export default reducer
