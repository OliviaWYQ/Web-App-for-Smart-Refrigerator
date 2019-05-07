import { HEAD_DATA } from '../actions/actionTypes';

const initState = {
    items: []
};

const getCategory = (state, action) => {
    return {...state, items: action.obj.data.poilist};
}

const categoryReducer = (state = initState, action) => {
    switch(action.type) {
        case HEAD_DATA: return getCategory(state, action);
        default: return state;
    }
}

export default categoryReducer;