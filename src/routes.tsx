import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './view/Home';
import Checkout from './view/Checkout';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/checkout" component={Checkout} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;