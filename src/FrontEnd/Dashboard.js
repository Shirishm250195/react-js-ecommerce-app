import React from 'react';
import Header from '../Layout/Header';
import Banner from '../Layout/Banner';
import ProductList from './ProductList';

function Dashboard(props) {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductList></ProductList>
        </div>
    );
}

export default Dashboard;