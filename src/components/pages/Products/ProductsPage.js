import React, { Component } from 'react';
import withLayout from '../../hoc/WithPageLayout'
import ProductSetup from '../../partials/productSetup/productSetup'
import ProductData from '../../../data/products.json'
import './ProductPage.css';


class ProductsPage extends Component {
    state ={
        products: ProductData
    }
    filterTypeHandler = e => {
        let value = e.target.value;
        let filteredProducts = null;
        if (value === "hair-spray") {
            filteredProducts = ProductData.filter((product) => product.productType === "Hair Spray");
          this.setState({ products: filteredProducts });
        } else if (value === "shampoo") {
            filteredProducts = ProductData.filter((product) => product.productType === "Shampoo");
          this.setState({ products: filteredProducts });
        } else if (value === "serum") {
            filteredProducts = ProductData.filter((product) => product.productType === "Serum");
          this.setState({ products: filteredProducts });
        }else if (value === "conditioner") {
            filteredProducts = ProductData.filter((product) => product.productType === "Conditioner");
          this.setState({ products: filteredProducts });
        }else if (value === "mousse") {
            filteredProducts = ProductData.filter((product) => product.productType === "Mousse");
          this.setState({ products: filteredProducts });
         }else if (value === "curl-cream") {
            filteredProducts = ProductData.filter((product) => product.productType === "Curl Cream");
          this.setState({ products: filteredProducts });
         }else if (value === "gel") {
            filteredProducts = ProductData.filter((product) => product.productType === "Gel");
          this.setState({ products: filteredProducts });
         }else if (value === "jelly") {
            filteredProducts = ProductData.filter((product) => product.productType === "Jelly");
          this.setState({ products: filteredProducts });
         }else if (value === "wash-n-go") {
            filteredProducts = ProductData.filter((product) => product.productType === "Wash N Go");
          this.setState({ products: filteredProducts });
         }else {
          this.setState({ products: ProductData });
        }
      };

      filterPriceHandler = e => {
        let value = e.target.value;
        let filteredProducts = null;
        if (value === "high") {
            filteredProducts = ProductData.filter((product) => product.price >= 30.00);
          this.setState({ products: filteredProducts});
        } else if (value === "medium") {
            filteredProducts = ProductData.filter((product) => product.price > 15.00 && product.price <30.00);
          this.setState({ products: filteredProducts });
        } else if (value === "low") {
            filteredProducts = ProductData.filter((product) => product.price <= 15.00);
          this.setState({ products: filteredProducts });
        }else if (value === "price") {
          this.setState({ products: ProductData });
        }
      };
    
    render(){
        return(
            <main>
                <h1 className="heading">Products</h1>
                <div className="productsBorder"></div>
                <div className="filters">
                    <p><b>Filter By:</b></p>
                    <div className="type-filter">
                        <select id="product-type" onChange={this.filterTypeHandler}>
                            <option value="type">Type</option>
                            <option value="hair-spray">Hair Spray</option>
                            <option value="shampoo">Shampoo</option>
                            <option value="serum">Serum</option>
                            <option value="conditioner">Conditioner</option>
                            <option value="mousse">Mousse</option>
                            <option value="curl-cream">Curl Cream</option>
                            <option value="gel">Gel</option>
                            <option value="jelly">Jelly</option>
                            <option value="wash-n-go">Wash N Go</option>
                        </select>
                    </div>
                    <div className="type-filter">
                        <select name="Price Range" onChange={this.filterPriceHandler}>
                            <option value="price">Price</option>
                            <option value="high"> More Than $30</option>
                            <option value="medium">$15 - $30</option>
                            <option value="low">Less Than $15</option>
                        </select>
                    </div>
                </div>
                <ProductSetup products={this.state.products}/>
            </main>
        )
    }
}

export default withLayout(ProductsPage);