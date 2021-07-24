import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { BG, Container, Row, Title } from './styled';

function Checkout(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [complement, setComplement] = useState('');
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: Number(""),
    photo: ""
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const prod = localStorage.getItem('@Product');
    if (prod) {
      setProduct(JSON.parse(prod));
    } else {
      history.push('/');
    }
  }, [history]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem('@OrderPlaced', JSON.stringify({name, email, address, city, zipcode, complement, product}));
    setOrderPlaced(true);
  };

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handleAddressChange = (event: any) => setAddress(event.target.value);
  const handleCityChange = (event: any) => setCity(event.target.value);
  const handleZipcodeChange = (event: any) => setZipcode(event.target.value);
  const handleComplementChange = (event: any) => setComplement(event.target.value);

  return(
    <>
    <Header />
    <Title>Checkout</Title>
    <Container>
      <div>
        <img src={product.photo} alt="" width="360px" height="180px" />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        </div>
      </div>
    </Container>
    <BG>
      { !orderPlaced 
      
      ? (
        <>
        <Row>
          <div className="column">
            <input type="text" id="name" placeholder="Digite seu nome" autoComplete="name" value={name} onChange={handleNameChange}  />
          </div>
          <div className="column">
            <input type="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={handleEmailChange}  autoComplete="username" inputMode="email" />
          </div>
        </Row>

        <Row>
          <div className="column">
            <input type="text" id="address" placeholder="Digite seu endereço" value={address} onChange={handleAddressChange}  />
          </div>
          <div className="column">
            <input type="text" id="city" placeholder="Cidade/UF" value={city} onChange={handleCityChange}  />
          </div>
        </Row>

        <Row>
          <div className="column">
            <input type="text" id="zipcode" placeholder="Digite seu CEP" value={zipcode} onChange={handleZipcodeChange}  inputMode="numeric" />
          </div>
          <div className="column">
            <input type="text" id="complement" placeholder="Complemento" value={complement} onChange={handleComplementChange}  />
          </div>
        </Row>

        <Row>
          <button onClick={handleSubmit}>FINALIZAR</button>
        </Row>
        </>
      ) 
      
      : <h1>Os dados foram salvos com sucesso!</h1>
      
      }
      
    </BG>
    <Footer />
    </>
  );
};

export default Checkout;