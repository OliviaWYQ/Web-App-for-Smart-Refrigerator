import { HEAD_DATA } from "./actionTypes";
import axios from 'axios';

export const getHeaderData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/head-new.json'
    }).then((resp) => {
        dispatch({
            type: HEAD_DATA,
            obj: resp.data
        })
        // this.props.dispatch(getHeaderData(resp.data));
    });

}