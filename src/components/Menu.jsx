import React from 'react';
import ImageTop from '../assets/graphics/graphics-header.svg';
import ImageBottom from '../assets/graphics/graphics-footer.svg';
import Header from '../components/Header.jsx';
import loadingAnimation from '../assets/graphics/loader.png';
import { useDispatch } from 'react-redux';
import { cart } from '../actions';

function Menu(props) {
  const dispatch = useDispatch();

  const addOrder = (e) => {
    dispatch(cart([{ id: e.target.dataset.id, title: e.target.dataset.title, price: e.target.dataset.price }]));
  }

  return (
    <div className="menu-for-different-coffee">
      <Header />
      <img className="image image-bottom" src={ImageTop} alt="Leaf on top of the screen" />
      <h1 className="menu-title">meny</h1>
      {props.apiStatus &&
        <>
          <h2 className="server-status-title">Server is down.. please check why!</h2>
          <img src={loadingAnimation} className="animation" alt="Laddnings tid med kaffe" />
        </>
      }
      {!props.apiStatus &&
        <ul>
          {
            props.list.map((index, key) => <li className="coffee-type" key={index.id}>
              <div className="button-container">
                <button data-id={index.id} data-title={index.title} data-price={index.price} onClick={addOrder} type="button" className="btn add">
                  <div className="add-icon"></div>
                </button>
              </div>
              <div className="container">
                <div className="title-and-price">
                  <h2 className="title">{index.title}</h2>
                  <h2 className="price">{index.price} kr</h2>
                </div>
                <div className="sub-title">
                  <h3 className="description">
                    {index.desc}
                  </h3>
                </div>
              </div>
            </li>)
          }
        </ul >
      }
      <img className="image image-bottom" src={ImageBottom} alt="Leaf on bottom of the screen" />
    </div >
  );
}

export default Menu;