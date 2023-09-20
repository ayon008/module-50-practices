import React from 'react';
import './Cart.css';
const Cart = props => {
    const shoppingCarts = props.cart;

    let total = 0;
    let shippingTotal = 0;
    for (const shoppingCart of shoppingCarts) {
        const price = shoppingCart.price;
        const shippingCharge = shoppingCart.shipping;
        total = total + price;
        shippingTotal = shippingTotal + shippingCharge;
    }
    const tax = parseFloat((total * 0.07).toFixed(2));
    const grandTotal = total + shippingTotal + tax;

    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items: {shoppingCarts.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shippingTotal}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;