export const cartAmount = (amount) => {
  return {
    type: 'CARTAMOUNT',
    amount: amount
  }
}

export const displayOrder = (boolean) => {
  return {
    type: 'DISPLAYCART',
    display: boolean
  }
}

export const displayMenu = (boolean) => {
  return {
    type: 'DISPLAYMENU',
    display: boolean
  }
}


export const totalPrice = (totalPrice) => {
  return {
    type: 'TOTALPRICE',
    totalPrice: totalPrice
  }
}

