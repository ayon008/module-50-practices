import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const [cart, setCart] = useState([]);
    let newCart;
    const handler = product => {
        newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='container'>
            <div className='product-container'>
                {
                    products.map(product => <Product eventHandler={handler} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;