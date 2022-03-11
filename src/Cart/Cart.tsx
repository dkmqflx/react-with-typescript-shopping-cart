import React from 'react';
import CartItem from '../CartItem/CartItem';

// Types

import { CartItemType } from '../App';

// Styles

import { Wrapper } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const caculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div>
      <Wrapper>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No Items in cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}></CartItem>
        ))}
        <h2>Total: ${caculateTotal(cartItems).toFixed(2)}</h2>
      </Wrapper>
    </div>
  );
};

export default Cart;
