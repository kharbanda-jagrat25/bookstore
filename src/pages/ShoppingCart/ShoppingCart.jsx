import React, { useEffect, useState } from 'react';
import './shoppingCart.scss';
import { sampleBooks } from '../../data/data';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(sampleBooks.filter(b => b.isAddedToCart));
    }, []);

    const removeFromCart = (book) => {
        book.isAddedToCart = false;
        const updatedCart = cart.filter((item) => item.id !== book.id);
        setCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, book) => total + book.price, 0);
    };

    return (
        <div className='list-container'>
            <h1 className='heading'>Shopping Cart</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((book) => (
                            <li key={book.id}>
                                {book.title} - ${book.price}
                                <button onClick={() => removeFromCart(book)}>Remove</button>
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
