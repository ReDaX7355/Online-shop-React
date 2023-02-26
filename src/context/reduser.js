import types from "./types";

const Reduser = (state, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: action.payload };
    case types.ADD_CART_ITEM:
      const itemsID = state.cartItems.map((i) => i.id);
      if (itemsID.includes(action.payload.id)) {
        return { ...state };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case types.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload),
        ],
      };
    case types.SIGN_IN:
      return { ...state, auth: true, currentUser: action.payload };
    case types.SIGN_OUT:
      return { ...state, auth: false, currentUser: "" };
    default:
      return state;
  }
};

export default Reduser;
