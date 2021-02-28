import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { displayOrder } from '../actions';
import FilterItems from './FilterItems';
function Cart(props) {
  const dispatch = useDispatch();
  const displayCart = useSelector(state => state.displayCart);
  const totalPriceReducer = useSelector(state => state.totalPrice);
  const totalPriceStorage = localStorage.getItem('totalPrice');

  const cart = useSelector(state => state.cartAmount);
  const history = useHistory();
  const [orderAmount, updateOrderAmount] = useState(0);
  const [totalPriceOfOrder, updateTotalPriceOfOrder] = useState(0);

  // OM korgen inte är tomt uppdatera dem innan man kommer till varukorgen component "sidan"
  useEffect(() => {
    if (cart !== 0) {
      updateOrderAmount(cart)
    }
    else {
      return updateOrderAmount(cart)
    }
  }, [cart]);

  // Extra kollar om alla scenario är okay..
  useEffect(() => {
    if (totalPriceReducer !== 0) {
      updateTotalPriceOfOrder(totalPriceStorage)
    }
    else if (totalPriceReducer === null) {
      updateTotalPriceOfOrder(0);
    }
    else if (totalPriceReducer === 0) {
      updateTotalPriceOfOrder(totalPriceStorage);
    }
  }, [totalPriceStorage])

  const loadCartAmount = () => {
    return orderAmount;
  }

  return (
    <>
      <div className={`cart-container ${displayCart ? 'adapt' : 'non-adapt'}`}>
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
        <div className={`confirmation-box ${displayCart ? 'adapt' : 'non-adapt'}`}>
          <div className="confirmation-container">
            <h2 className="order-title">
              Din beställning
            </h2>
            <div className="order-container">
              <ul className="order-list"><FilterItems /></ul>
              <div className="total-sum-of-price-container">
                <h2 className="total-sum-text">total</h2>
                <span className="total-sum-underline"></span>
                <h3 className="total-sum-of-price">{totalPriceOfOrder === null ? 0 : totalPriceOfOrder} kr</h3>
              </div>
            </div>

            <button type="button" onClick={(e) => history.push('/status')} className="btn accept-order"><h2 className="button-text">Take my money!</h2></button>
          </div>
        </div>
      }
    </>
  );
}

export default Cart;