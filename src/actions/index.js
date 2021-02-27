export const add = (coffeeArray) => {
  return {
    type: 'ADD',
    add: coffeeArray
  }
}

export const remove = (coffeeArray) => {
  return {
    type: 'REMOVE',
    remove: coffeeArray
  }
}

export const cart = (order) => {
  return {
    type: 'CART',
    cart: order
  }
}

export const displayOrder = (boolean) => {
  return {
    type: 'DISPLAY',
    display: boolean
  }
}

export const totalPrice = (totalPrice) => {
  return {
    type: 'TOTALPRICE',
    totalPrice: totalPrice
  }
}

