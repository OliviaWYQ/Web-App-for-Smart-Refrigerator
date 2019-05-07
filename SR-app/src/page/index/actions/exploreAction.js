import { EXPLORE_DATA } from "./actionTypes";
import axios from 'axios';

export const getExploreData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/recipe.json'
    }).then((resp) => {
        dispatch({
            type: EXPLORE_DATA,
            obj: resp.data
        })
    });
}