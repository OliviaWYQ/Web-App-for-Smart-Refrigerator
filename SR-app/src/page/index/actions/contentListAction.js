import { LIST_DATA } from "./actionTypes";
import axios from 'axios';

export const getListData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/homelist-new.json'
    }).then((resp) => {
        dispatch({
            type: LIST_DATA,
            obj: resp.data
        })
    });
}