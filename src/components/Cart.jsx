import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { displayOrder } from '../actions';
import FilterItems from './FilterItems'; // Forsätt här och bygg färdigt
function Cart(props) {
  const dispatch = useDispatch();
  const displayCart = useSelector(state => state.displayCart);
  const cart = useSelector(state => state.cartAmount);
  const totalPriceFromReducer = useSelector(state => state.totalPrice)


  // const totalPriceFromReducer = useSelector(state => state.totalPrice);
  const history = useHistory();
  const [orderAmount, updateOrderAmount] = useState(0);

  useEffect(() => {
    if (cart !== 0) {
      updateOrderAmount(cart)
    }
  }, [cart]);

  const loadCartAmount = () => {
    return orderAmount;
  }



  return (
    <>
      <div className={`${displayCart ? 'adapt' : 'non-adapt'} cart-container`}>
        <button className="btn cart" onClick={(() => dispatch(displayOrder(displayCart)))}>
          <div className="cart-icon"></div>
        </button>
        <div className="badge">
          <span className="number">
            {loadCartAmount()}
          </span>
        </div>
      </div>
      {displayCart &&
        <div className={`${displayCart ? 'adapt' : 'non-adapt'} confirmation-box`} >
          <div className="confirmation-container">
            <h2 className="order-title">
              Din beställning
            </h2>
            <div className="order-container">
              {/* <ul className="order-list"><FilterItems /></ul> */}
            </div>
            <div className="total-amount-container">
              <div className="total-amount">

                <h3 className="total-text">total</h3>
                <span className="underline"></span>
                <h3 className="total-price">{totalPriceFromReducer}</h3>
              </div>
            </div>
            <button type="button" onClick={(e) => history.push('/status')} className="btn accept-order">Take my money!</button>
          </div>
        </div>
      }
    </>
  );
}

export default Cart;