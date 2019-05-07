import { EXPLORE_DATA } from '../actions/actionTypes';

const initState = {
    list: []
};

const getExploreData = (state, action) => {
    return {...state, list: action.obj.hits};
}

const exploreReducer = (state = initState, action) => {
    switch(action.type) {
        case EXPLORE_DATA: return getExploreData(state, action);
        default: return state;
    }
}

export default exploreReducer;