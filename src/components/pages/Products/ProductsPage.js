import React, { Component } from 'react';
import withLayout from '../../hoc/WithPageLayout'
import ProductSetup from '../../partials/productSetup/productSetup'
import ProductData from '../../../data/products.json'
import './Product.css';

class ProductsPage extends Component {
    render(){
        return(
            <main>
                <h1 className="heading">Products</h1>
                <div className="productsBorder"></div>
                <ProductSetup products={ProductData}/>
            </main>
        )
    }
}

export default withLayout(ProductsPage);