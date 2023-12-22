export default (state, action) => {
  switch (action.type) {
    case "addList":
      return [...state, action.payload];
    default:
      return state;
  }
};
