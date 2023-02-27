import types from './types';

const Reduser = (state, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return { ...state, products: action.payload };
    case types.ADD_CART_ITEM:
      const quantity = 1;
      const itemIndex = state.cartItems.findIndex(
        (val) => val.id == action.payload.id
      );
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: quantity,
        };
        return { ...state, cartItems: [...state.cartItems, newItem] };
      } else {
        const newItem = {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity + 1,
        };
        const newCart = state.cartItems.slice();
        newCart.splice(itemIndex, 1, newItem);
        return { ...state, cartItems: newCart };
      }
      const itemsID = state.cartItems.map((i) => i.id);
      if (itemsID.includes(action.payload.id)) {
        return { ...state };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case types.CHANGE_CART:
      return { ...state, cartItems: [...action.payload] };
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
      return { ...state, auth: false, currentUser: '' };
    default:
      return state;
  }
};

export default Reduser;
