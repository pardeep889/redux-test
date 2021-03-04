export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_ORDER":
      return { ...state, orders: action.payload };
    case "COMPLETE":
      return { ...state, orders: action.payload };
    default:
      return state;
  }
}
