import React from 'react';
import "./productSetup.css";

const productSetup = ({products,}) => {

    const Products = () => products.map(item => (
        
            <div className="Products">
                <div className="Setup">
                <img src={item.image} alt={item.name} />
            <h3 className="Title">{item.name}</h3>
            <p className="Prices">{item.price}</p>
            <p>{item.description}</p>
            <button className="Button">Buy Now</button>
            </div>
          </div>
        
      ))

    return(
        <div className="Wrapper">
        <Products />
        </div>
    )
}

export default productSetup;