import React, { useState } from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Product = props => {

    const [cart, setCart] = useState([]);

    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <h6>Manufacturer : {seller}</h6>
                    <h6>Rating : {ratings} start</h6>
                </div>
            </div>
            <button className='btn' onClick={() => props.eventHandler(props.product)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;