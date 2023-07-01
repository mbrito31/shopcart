import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCart3 } from 'react-icons/bs';
import './ProdutoCard.css';
import formatCurrency from '../util/formatCurrency';
import AppContext from '../../context/AppContext';

function ProdutoCard({ data }) {
  const { title, thumbnail, price } = data;
  const {cartItens, setCartItens} = useContext(AppContext);

  const handleAddCart = () => {
    setCartItens([...cartItens, data]);
  };

  return (
    <section className="produto-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card-imagem"
      />

      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button" className="add-cart" onClick={ handleAddCart}>
        <BsCart3  className="cart-card"/>
      </button>
    </section>
  );
}

export default ProdutoCard;

ProdutoCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
