import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer.js';
import contentListReducer from './contentListReducer.js';
import exploreReducer from './exploreReducer.js';
import buyReducer from './buyReducer.js';

import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

const mainReducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  exploreReducer,
  buyReducer,
  router: routerReducer
});

export default mainReducers;