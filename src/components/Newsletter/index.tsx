import React, { useState } from 'react';
import { Section } from './styled';

function Newsletter(){
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: any) => setEmail(event.target.value);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    localStorage.setItem('@Email', JSON.stringify({'email': email}));
    setEmail('');
};
  
  return( 
    <Section> 
      <h3>Newsletter</h3>
      <p>Assine nossa newsletter e ganhe 10% off em sua primeira compra</p>
      <div>
        <input type="email" id="email" placeholder="Digite seu melhor e-mail" value={email} onChange={handleEmailChange} autoComplete="username" inputMode="email" />
        <button onClick={handleSubmit}>CADASTRAR</button>
      </div>
    </Section>
  );
};

export default Newsletter;