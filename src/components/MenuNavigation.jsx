import React from 'react';
import { displayMenu } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function MenuNavigation(props) {
  const dispatch = useDispatch();
  const display = useSelector(state => state.displayMenu);
  console.log(display);
  return (
    <>
      <div className={`menu-container ${display ? 'adapt' : 'non-adapt'}`}>
        <button className={`${display ? 'adapt' : 'non-adapt'} btn navigation`} onClick={(e) => dispatch(displayMenu(display))}>
          <div className="nav-icon"></div>
        </button>
      </div>
      {display &&
        <div className={`links-box ${display ? 'adapt' : 'non-adapt'}`}>
          <div class="links-container">
            <ul className="links">
              <li className="link"><Link to="/">Meny</Link></li>
              <li className="link"><Link to="/about">Vårt Kaffe</Link></li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}

export default MenuNavigation;