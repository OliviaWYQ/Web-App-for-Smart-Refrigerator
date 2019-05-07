import { TEMP_DATA } from '../actions/actionTypes';

const initState = {
    list: []
};

const getListData = (state, action) => {
    return {...state, list: action.obj.data.poilist};
}

const tempReducer = (state = initState, action) => {
    switch(action.type) {
        case TEMP_DATA: return getListData(state, action);
        default: return state;
    }
}

export default tempReducer;