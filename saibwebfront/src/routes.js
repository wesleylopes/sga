import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Login from './pages/Login/';
import Dashboard from './pages/Dashboard/';

export default function Routes(){
    return(             
        <BrowserRouter>
         <switch>
           <Route path="/" exact component={Login} />
           <Route path="/login" component={Login} />
           <Route path="/dasboard" component={Dashboard} />   
        </switch>
        </BrowserRouter>
    );
}