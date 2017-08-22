import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './pages/app';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
    document.getElementById('app'));
}

render(App);

if (module.hot) {
    console.log('is hot replace');
    module.hot.accept('./pages/app', () => {
        render(App)
    })
}

