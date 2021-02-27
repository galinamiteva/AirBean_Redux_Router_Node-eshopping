const RemoveReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE':
      return action.remove
    default:
      return state;
  }
}

export default RemoveReducer;