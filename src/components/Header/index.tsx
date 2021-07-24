import React from 'react';
import { Link } from 'react-router-dom';

import { H1 } from './styled';

function Header(){
  return(  
    <H1><Link to="/">Gama.Commerce</Link></H1>
  );
};

export default Header;