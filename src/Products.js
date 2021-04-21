import React, { useState } from 'react';
import coffeemug from './images/coffee-mug.jpg';
import tumblrcup from './images/tumblrcup.jpeg';
import './App.css';

function Products() {
    const [products] = useState([
        {
            name: 'Coffee Mug',
            cost: '$15.00',
            image: `${coffeemug}`,
        },
        {
            name: 'Tumblr',
            cost: '$25.00',
            image: `${tumblrcup}`,
        },
    ]);
    return (
        <div className="products-full">
            <h1>Products</h1>
            <hr></hr>
            <div className="products">
            {products.map((product) => (
                <div>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <img src={product.image} alt={product.name} />
                    <button>Add to Cart</button>
                </div>
            ))}
            </div>
            </div>
  )
}

export default Products;