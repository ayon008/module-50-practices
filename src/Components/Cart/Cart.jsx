import React from 'react';
import './Cart.css';
const Cart = props => {
    console.log(props.cart);
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Itmes: {props.cart.length}</p>
            <p>Total Price</p>
            <p>Total Shipping Charge</p>
            <p>Tax</p>
            <h3>Grand Total</h3>
        </div>
    );
};

export default Cart;