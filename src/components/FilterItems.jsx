import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalPrice } from '../actions';
import ArrowUp from '../assets/graphics/arrow-up.svg';
import ArrowDown from '../assets/graphics/arrow-down.svg';

function Items(props) {
  const dispatch = useDispatch();
  let totalOf = [];
  let totalOfAllOrderInPrice = 0;
  const cartItem = useSelector(state => state.cart);

  const [filterRender, updateFilterRender] = useState([]);
  let itemsInCart = [];
  const FilterLoop = () => {
    for (let i = 0; i < cartItem.coffeeType.length; i++) {
      console.log('Items: ', cartItem.coffeeType[i][0])
      itemsInCart.push(cartItem.coffeeType[i][0])
    }
    updateFilterRender(itemsInCart)
  }

  const DisplayFilterItems = () => {
    let price;
    let name;
    let id;
    let amount;
    //Filterar ut kaffe sort och sparar allt från ordern och ska mappa ut det fint
    let filterOfBrewCoffee = filterRender.filter(filter => filter.id === '1');
    if (filterOfBrewCoffee.length !== 0) {
      for (let i = 0; i < filterOfBrewCoffee.length; i++) {
        price = filterOfBrewCoffee[i].price * filterOfBrewCoffee.length;
        name = filterOfBrewCoffee[i].title;
        id = filterOfBrewCoffee[i].id;
        amount = filterOfBrewCoffee.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }

    let filterOfCaffeDoppio = filterRender.filter(filter => filter.id === '2');
    if (filterOfCaffeDoppio.length !== 0) {
      for (let i = 0; i < filterOfCaffeDoppio.length; i++) {
        price = filterOfCaffeDoppio[i].price * filterOfCaffeDoppio.length;
        name = filterOfCaffeDoppio[i].title;
        id = filterOfCaffeDoppio[i].id;
        amount = filterOfCaffeDoppio.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }
    let filterOfCappuccino = filterRender.filter(filter => filter.id === "3");
    if (filterOfCappuccino.length !== 0) {
      for (let i = 0; i < filterOfCappuccino.length; i++) {
        price = filterOfCappuccino[i].price * filterOfCappuccino.length;
        name = filterOfCappuccino[i].title;
        id = filterOfCappuccino[i].id;
        amount = filterOfCappuccino.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }
    let filterOfLatteMacchiato = filterRender.filter(filter => filter.id === "4");
    if (filterOfLatteMacchiato.length !== 0) {
      for (let i = 0; i < filterOfLatteMacchiato.length; i++) {
        price = filterOfLatteMacchiato[i].price * filterOfLatteMacchiato.length;
        name = filterOfLatteMacchiato[i].title;
        id = filterOfLatteMacchiato[i].id;
        amount = filterOfLatteMacchiato.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }

    let filterOfCoffeeLatte = filterRender.filter(filter => filter.id === "5");
    if (filterOfCoffeeLatte.length !== 0) {
      for (let i = 0; i < filterOfCoffeeLatte.length; i++) {
        price = filterOfCoffeeLatte[i].price * filterOfCoffeeLatte.length;
        name = filterOfCoffeeLatte[i].title;
        id = filterOfCoffeeLatte[i].id;
        amount = filterOfCoffeeLatte.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }

    let filterOfCortado = filterRender.filter(filter => filter.id === "6");
    if (filterOfCortado.length !== 0) {
      for (let i = 0; i < filterOfCortado.length; i++) {
        price = filterOfCortado[i].price * filterOfCortado.length;
        name = filterOfCortado[i].title;
        id = filterOfCortado[i].id;
        amount = filterOfCortado.length;
      }
      totalOf.push({ id: id, title: name, price: price, amount: amount })
    }

    for (let i = 0; i < totalOf.length; i++) {
      totalOfAllOrderInPrice += totalOf[i].price;
    }
    console.log(totalOf)
    dispatch(totalPrice(totalOfAllOrderInPrice))

    return totalOf.map((index, key) => <li key={key} className="order-list-item">
      <div class="item-container">
        <div class="order-item-container">
          <h2 className="item-title">{index.title}</h2>
          <span className="underline"></span>
          <div className="arrow-amount-container">
            <button type="button" className="arrow arrow-up"><img src={ArrowUp} alt="an arrow that points up" /></button>
            <h4>{index.amount}</h4>
            <button type="button" className="arrow arrow-down"><img src={ArrowDown} alt="an arrow that points down" /></button>
          </div>
        </div>

      </div>
    </li>)

  }

  useEffect(() => {
    FilterLoop();
  }, [])

  return (
    //FILTER som ska kunna hitta alla 
    <>
      {DisplayFilterItems()}
    </>
  );
}

export default Items;