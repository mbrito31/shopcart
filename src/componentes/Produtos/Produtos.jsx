import React, { useEffect, useContext } from 'react';

import './Produtos.css';
import fetchProdutos from '../../api/fetchProdutos';
import ProdutoCard from '../ProdutoCard/ProdutoCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Produtos() {
  const {produtos, setProdutos, loading, setLoading} = useContext(AppContext);
  

  useEffect(() => {
    fetchProdutos('iphone').then((response) => {
      setProdutos(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="produtos container">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} data={produto} />
        ))}
      </section>
    )
  );
}

export default Produtos;
