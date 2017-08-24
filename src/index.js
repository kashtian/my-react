import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

const render = () => {
    ReactDOM.render(routes, document.getElementById('app'));
}

render();

if (module.hot) {
    module.hot.accept(() => {
        render()
    })
}

