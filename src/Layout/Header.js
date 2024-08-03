import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Ecommerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Contact</a>
                        </li>
                        
                        {/* <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <div class="d-flex align-items-center">
                        <i class="fas fa-shopping-cart me-2"></i>
                        {props.cart ? <span>Cart ({props.cart.cart.length})</span> : <span>Cart (0)</span>}
                    </div>
                    </div>
                </div>
            </nav>   
        </div>
    );
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };
  
  export default connect(mapStateToProps)(Header);