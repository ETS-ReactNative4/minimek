import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Provider } from  'react-redux'
import configureStore from "./store/configureStore";

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

function render() {
    const App =  require('./App').default
    const entryPoint = (<Provider store={store}><App /></Provider>)
    ReactDOM.render(entryPoint, document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) { 
        module.hot.accept('./App', () => { setTimeout(render) })
    }
}

render()
registerServiceWorker();