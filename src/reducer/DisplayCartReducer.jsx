const DisplayCartReducer = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY':
      if (state === true) {
        action.display = false;
        return action.display;
      }
      else if (state === false) {
        action.display = true;
        return action.display;
      }
      break

    default:
      return state;
  }
}

export default DisplayCartReducer;