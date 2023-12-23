const expenseReducer = (state, action) => {
  switch (action.type) {
    case "addList":
      return [...state, action.payload];
    case "deleteList":
      return state.filter((list) => list.id !== action.payload);
    default:
      return state;
  }
};

export default expenseReducer;
