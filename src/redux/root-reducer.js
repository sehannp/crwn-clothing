import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

import { persistReducer } from 'redux-persist';

//local storage is set as the storage. Use sessionStorage for session;
import storage from 'redux-persist/lib/storage';

//since user is handled byfirebase, only cart is handled
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer);
