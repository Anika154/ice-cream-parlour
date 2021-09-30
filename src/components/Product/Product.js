import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const { img, name, service, address, phone, price } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />
    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img src={img} alt="ice-cream" />
                </div>
                <div className="container">
                    <h3 className="summary">Name: {name}</h3>
                    <p>Service: {service}</p>
                    <p>Address: {address} </p>
                    <p>Phone: {phone}</p>
                    <p>Price: {price}</p>
                    <button
                        onClick={() => props.handleAddToCart(props.product)}
                        className="btn-regular">{cartIcon} Order</button>
                </div>
            </div>

        </div>
    );
};

export default Product;