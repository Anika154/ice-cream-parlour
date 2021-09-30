import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    return (
        <div>
            <h2 className="summary">Order Summary</h2>
            <p><b>Items Ordered:</b> {totalQuantity}</p>
            <p><b>Total:</b> {total.toFixed(2)}</p>
            <hr className="selected-item" />
            <h2 className="summary">Selected Items: </h2>
            {
                cart.map(item =>
                    <h4>{item.name}</h4>)
            }
        </div>
    );
};

export default Cart;