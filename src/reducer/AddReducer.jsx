const AddReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return action.add
    default:
      return state;
  }
}

export default AddReducer;