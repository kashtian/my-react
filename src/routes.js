import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Components
import App from './pages/app';
import Test from './pages/test';

const routes = 
    <BrowserRouter>
        <App>
            <Route path="/test" component={Test} />
        </App>
    </BrowserRouter>

export default routes;