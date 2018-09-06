import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.css';
import { Provider } from  'react-redux'
import configureStore from "./app/store/configureStore";

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

function render() {
    const App =  require('./app/layout/App').default
    const entryPoint = (<Provider store={store}><App /></Provider>)
    ReactDOM.render(entryPoint, document.getElementById('root'));
}

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) { 
        module.hot.accept('./app/layout/App', () => { setTimeout(render) })
    }
}

render()
registerServiceWorker();