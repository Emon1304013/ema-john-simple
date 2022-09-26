import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {product,addToCartHandler}=props
    const {name,img,price,ratings,seller} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Seller: {seller}</p>
                <p className='product-ratings'>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> addToCartHandler(product)} className='btn-cart'>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon = { faShoppingCart } /> 
            </button>
        </div>
    );
};

export default Product;