import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../cartActions';
import "./ProductList.css";

function ProductList(props) {
  
  let [productsList,setProducts]=useState([])
    
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{
      setProducts(res.data)
      }).catch(error=>{
          console.log("error",error)
      })
  })
  
  const handleAddToCart = product => {
    props.addToCart(product);
  };

  const handleRemoveFromCart = product => {
    props.removeFromCart(product);
  };

    return (
        <div class="flex-container md-3">
            {
                productsList.map(product =>{
                   
                    return   <div class="card md-3">
                                <img src={product.image} class="card-img-top" alt="Product Image" width={'200px'} height={'200px'}/>
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">{product.description}</p>
                                    {/* <div class="align-items-center">
                                        <button class="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    </div> */}
                                    {props.cart.cart.find((item) => item.id === product.id) ? (
                                    <button onClick={() => handleRemoveFromCart(product)}>
                                    Remove from Cart
                                    </button>
                                ) : (
                                    <button onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                    </button>
                                )}
                                </div>
                            </div>           

                })
            }
          
        </div>
    );
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addToCart: product => dispatch(addToCart(product)),
      removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductList);