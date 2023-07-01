import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../Cart-item/Cart-item';
import AppContext from '../../context/AppContext';
import formatCurrency from '../util/formatCurrency';

function Cart() {
  const { cartItens, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart-ativo' : ''}`}>
      <div className="cart-itens">
        {cartItens.map((cartItem) => 
          <CartItem key={cartItem.id} data={cartItem} />
        )}
      </div>

      <div className="cart-resumo">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
