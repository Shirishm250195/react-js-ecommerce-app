import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
  const cartItems = props.cart.map(product => {
    return (
      <div key={product.id}>
        <h5>{product.title}</h5>
        <p>{product.description}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Cart</h2>
      {cartItems}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);