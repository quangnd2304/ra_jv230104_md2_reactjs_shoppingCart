import { combineReducers } from 'redux';
import cart from './cart';
import listProduct from './listProduct';
import notify from './notify';
export const rootReducer = combineReducers({ cart, listProduct, notify });