import React from 'react';
import Header from './componentes/Header/Header';
import Produtos from './componentes/Produtos/Produtos';
import Provider from './context/Provider';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Produtos />
      <Cart />
    </Provider>
  );
}

export default App;
