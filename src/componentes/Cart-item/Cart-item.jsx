import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartXFill } from 'react-icons/bs';
import formatCurrency from '../util/formatCurrency';
import './Cart-item.css';
import AppContext from '../../context/AppContext';


function CartItem( {data}) {
  const {cartItens, setCartItens} = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItens = cartItens.filter((item) => item.id  != id);
    setCartItens(updatedItens);

  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="item-imagem" />

      <div className="item-content">
        <h3 className="item-title">{title}</h3>
        <h3 className="item-price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" className="remove-item" onClick={handleRemoveItem}>
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
