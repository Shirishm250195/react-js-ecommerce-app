import { combineReducers, legacy_createStore } from 'redux';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
       return { ...state, cart: [...state.cart, action.product] };
    case 'REMOVE_FROM_CART':
        console.log(action);
      return { ...state, cart: state.cart.filter(product => product.id !== action.product.id) };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = legacy_createStore(rootReducer);

export default store;