import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseItem, decreaseItem } from '../redux/actions';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrease = (id) => {
        dispatch(increaseItem(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseItem(id));
    };

    const handleCheckout = () => {
        alert('Coming Soon'); // عرض الرسالة عند الضغط على زر Checkout
    };

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>${item.price} x {item.quantity}</p>
                            <div className="cart-item-actions">
                                <button onClick={() => handleIncrease(item.id)}>+</button>
                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalCost.toFixed(2)}</h3>
            <div className="cart-actions">
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
                <Link to="/products">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default Cart;