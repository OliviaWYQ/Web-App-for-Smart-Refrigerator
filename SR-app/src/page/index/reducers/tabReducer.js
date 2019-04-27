import { ADD_TODO, CHANGE_TAB } from '../actions/actionTypes.js';
import { TABKEY } from '../config.js';

const initState = {
    tabs: [
        {
            name: 'Home',
            key: TABKEY.home
        },
        {
            name: 'History',
            key: TABKEY.history
        },
        {
            name: 'Explore',
            key: TABKEY.explore
        }
    ],
    activeKey: TABKEY.home,
    num: 0
};

// const addTodo = (state, action) => {
//     let objNum = action.obj.num;
//     let num = state.num;

//     return {
//         num: num + objNum
//     };
// };

const changeTab = (state, action)=>{
    let activeKey = action.obj.activeKey;
    return {...state, activeKey: activeKey};
};

const tabReducer = (state = initState, action) => {
    switch(action.type){
        // case ADD_TODO: return addTodo(state, action);
        case CHANGE_TAB: return changeTab(state, action);
        default: return state;
    }
};

export default tabReducer;