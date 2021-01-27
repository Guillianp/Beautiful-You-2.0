import React from 'react';

const productSetup = ({products,}) => {

    const Products = () => products.map(item => (
        <div className="wrapper">
                <img src={item.imageURL} alt={item.title} className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{item.title}</h2>
            <p className="text-lg leading-6 font-medium text-gray-900">{item.price}</p>
            <p className="text-base text-gray-500">{item.description}</p>
          </div>
      ))

    return(
        <Products />
    )
}