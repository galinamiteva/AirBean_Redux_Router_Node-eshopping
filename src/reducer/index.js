import { combineReducers } from 'redux'
import Add from './AddReducer';
import Remove from './RemoveReducer';
import Cart from './CartReducer';
import DisplayCart from './DisplayCartReducer';
import TotalPrice from './TotalPriceReducer';

const allReducers = combineReducers({
  add: Add,
  remove: Remove,
  cart: Cart,
  displayCart: DisplayCart,
  totalPrice: TotalPrice
})

export default allReducers;