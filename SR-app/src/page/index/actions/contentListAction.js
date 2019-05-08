import { LIST_DATA } from "./actionTypes";
import axios from 'axios';

export const getListData = ()=>(dispatch)=>{
    axios({
        method: 'get',
        url: '/json/foodRecord.json'

        // method: 'post',
        // // url: '/aws-nodejs-sample/json/foodRecord.json'
        // url: 'http://localhost:3000/api',
        // data: {
        //     url: '/SR-server/json/foodRecord.json',
        //     params: {
        //         url:'',
        //         userid:''
        //     }
        // }
        
    }).then((resp) => {
        dispatch({
            type: LIST_DATA,
            obj: resp.data
        })
    });
}