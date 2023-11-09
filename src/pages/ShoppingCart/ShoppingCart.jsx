import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart([...cart, book]);
    };

    const removeFromCart = (bookId) => {
        const updatedCart = cart.filter((item) => item.id !== bookId);
        setCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, book) => total + book.price, 0);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((book) => (
                            <li key={book.id}>
                                {book.title} - ${book.price}
                                <button onClick={() => removeFromCart(book.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="total-price">
                {cart.length > 0 && <p>Total: ${calculateTotalPrice()}</p>}
            </div>
        </div>
    );
};

export default ShoppingCart;
