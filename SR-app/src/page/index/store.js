import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/main.js';
import thunk from 'redux-thunk';

import createHistory from 'history/createHashHistory';

import { routerMiddleware } from 'react-router-redux';

const history = createHistory();

history.replace('home');

const historyMiddle = routerMiddleware(history);

const store = createStore(mainReducer, applyMiddleware(thunk, historyMiddle));

if (module.hot) {
    module.hot.accept('./reducers/main', ()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer);
    });
}
module.exports = {
    store,
    history
}