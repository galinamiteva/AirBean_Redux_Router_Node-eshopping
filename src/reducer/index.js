import { combineReducers } from 'redux'
import Add from './AddReducer';
import Remove from './RemoveReducer';
import CartAmount from './CartAmountReducer';
import DisplayCart from './DisplayCartReducer';
import TotalPrice from './TotalPriceReducer';

const allReducers = combineReducers({
  add: Add,
  remove: Remove,
  cartAmount: CartAmount,
  displayCart: DisplayCart,
  totalPrice: TotalPrice
})

export default allReducers;