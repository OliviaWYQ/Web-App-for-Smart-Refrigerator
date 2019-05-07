import { TEMP_DATA } from "./actionTypes";
import axios from 'axios';

export const getListData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/THRecord.json'
    }).then((resp) => {
        dispatch({
            type: TEMP_DATA,
            obj: resp.data
        })
    });
}