import React, { Component } from 'react';
import withLayout from '../../hoc/WithPageLayout'
import ProductSetup from '../../partials/productSetup/productSetup'
import ProductData from '../../../data/products.json'
import './Product.css';

class ProductsPage extends Component {
    render(){
        return(
            <main>
                <h1 style={{textAlign: 'center',  color: '#854ea2'}}>Products</h1>
                <ProductSetup className="Products" products={ProductData}/>
            </main>
        )
    }
}

export default withLayout(ProductsPage);