const initialUserState = {
  coffeeType: []
}
const CartReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'CART':
      return {
        ...state,
        coffeeType: [...state.coffeeType, action.cart]
      }
    default:
      return state;
  }
}

export default CartReducer;