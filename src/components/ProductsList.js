import React from 'react';
import "./ProductsList.sass";

function ProductsList() {
    const products = [
        { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
        { id: 2, name: "Macbook", description: "High-performance Apple laptop for professionals.", price: 2200 },
        { id: 3, name: "Chromebook", description: "High-performance Microsoft laptop for professionals.", price: 1500 },
        { id: 4, name: "Mac", description: "High-performance desktop computer for professionals.", price: 1800 },
        { id: 5, name: "Mac-mini", description: "High-performance and compact desktop for professionals.", price: 1200 }
    ]
    const productsList = () => {
        return products.map(function (data) {
            return (
                <div className='product-Card' key={data.id}>
                    <h3>{data.name}</h3>
                    <div className='product-Card-Description'>
                        <ul>
                            <li>{data.description}</li>
                            <li>${data.price}.00</li>
                        </ul>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className='productsList'>
            {productsList()}
        </div>
    )
}
export default ProductsList