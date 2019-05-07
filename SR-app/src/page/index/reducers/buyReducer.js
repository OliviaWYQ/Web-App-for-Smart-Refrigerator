import { BUY_DATA } from '../actions/actionTypes';

const initState = {
    list: []
};

const getBuyData = (state, action) => {
    return {...state, list: action.obj.data.poilist};
}

const buyReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_DATA: return getBuyData(state, action);
        default: return state;
    }
}

export default buyReducer;