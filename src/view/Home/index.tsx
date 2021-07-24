import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import api from '../../services/api';

import { Container, Content, Section } from './styled';

interface IProduct {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
}

function Home(){
  const [ data, setData ] = useState<IProduct[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get('/products.json?key=cbf56870').then(response => {
      setData(response.data);
    });
  }, []);
  
  const handleAddToCart = (index: number) => {
    clearProducts();
    localStorage.setItem('@Product', JSON.stringify(data[index]));
    history.push('/checkout');
  };

  function clearProducts() {
    for(var i = 0; i < localStorage.length; i++){
      let key = String(localStorage.key(i));
      if (key.startsWith("@Product")) {
        localStorage.removeItem(key);
      }
    }
  }

  return(
    <>
    <Header />
    <Container>
      <Content>
        <h1>BEST SELLER</h1>
        <p>Os mais vendidos da semana</p>
      </Content>
      <Section>
        { data.map( (prod, index) => (
          <div key={prod.id}>
            <img src={prod.photo} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p>{prod.description}</p>
            <span>
              <h4>{prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
              <button onClick={ () => handleAddToCart(index) }>COMPRAR</button>
            </span>
          </div>
        )) }
      </Section>
      <Newsletter />
    </Container>
    <Footer />
    </>
  );
};

export default Home;