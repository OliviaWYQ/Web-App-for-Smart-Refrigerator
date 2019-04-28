import { createStore } from 'redux';

import mainReducer from './reducers/main.js';

const store = createStore(mainReducer);

if (module.hot) {
    module.hot.accept('./reducers/main', ()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer);
    });
}
export default store;