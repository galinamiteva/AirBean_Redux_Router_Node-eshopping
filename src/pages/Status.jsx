import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingIcon from '../assets/graphics/loader.png';
import Drone from '../assets/graphics/drone.svg';
import { Link } from 'react-router-dom';


function Status(props) {
  const
    [orderNr, updateOrderNr] = useState(''),
    [loading, updateLoading] = useState(true),
    [eta, updateEta] = useState(0);

  const orderConfirmationSetup = async () => {
    return await axios.post('http://localhost:5000/api/beans');
  }

  useEffect(() => {
    orderConfirmationSetup().then(res => {
      updateEta(res.data.eta);
      updateOrderNr(res.data.orderNr);
      updateLoading(false);
      localStorage.clear();
    }).catch(err => console.error(err))
  }, [])

  return (
    <section className="status-section">
      <div className={`status-container ${loading ? 'loading-screen' : ''}`}>
        {loading && <div className="loading-container">
          <img className="loading" src={LoadingIcon} alt="a coffee that are fresh from pot" />
        </div>}
        {!loading &&
          <>
            <div className="order-number-box">
              <h3 className="order-number">ordernummer <span className="bold">#{orderNr}</span></h3>
            </div>
            <div className="drone-box">
              <img src={Drone} className="drone" alt="A drone that holding coffee" />
            </div>
            <div className="delivery-text">
              <h1>Din beställning är på väg!</h1>
            </div>
            <div className="eta-container">
              <h2 className="eta"><span className="bold">{eta}</span> minuter</h2>
            </div>
            <div className="button-container">
              <Link to="/" className="btn done">Okay Cool!</Link>
            </div>
          </>
        }
      </div>
    </section >
  );
}

export default Status;