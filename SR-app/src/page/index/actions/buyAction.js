import { BUY_DATA } from "./actionTypes";
import axios from 'axios';

export const getBuyData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/buy.json'
    }).then((resp) => {
        dispatch({
            type: BUY_DATA,
            obj: resp.data
        })
    });
}