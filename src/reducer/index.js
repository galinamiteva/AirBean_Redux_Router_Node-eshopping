import { combineReducers } from 'redux'
import CartAmount from './CartAmountReducer';
import DisplayCart from './DisplayCartReducer';
import TotalPrice from './TotalPriceReducer';
import DisplayMenu from './DisplayMenuReducer';


const allReducers = combineReducers({
  cartAmount: CartAmount,
  displayCart: DisplayCart,
  totalPrice: TotalPrice,
  displayMenu: DisplayMenu
})

export default allReducers;