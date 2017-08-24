import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './pages/app';
import Test from './pages/test';

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Route path="/test" component={Test} />
            </App>
        </BrowserRouter>,
    document.getElementById('app'));
}

render();

if (module.hot) {
    module.hot.accept(() => {
        render()
    })
}

