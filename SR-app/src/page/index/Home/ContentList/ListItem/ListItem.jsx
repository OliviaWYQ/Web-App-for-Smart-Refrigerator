import React from 'react';
import './ListItem.scss';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import { NavLink, withRouter } from 'react-router-dom';
// import { getListData } from '../../actions/contentListAction';
/**
 * @constructor < ListItem / >
 * @description Home ListItem
 */

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.fetchData();
    }

    handle() {
        // window.location.pathname = "/change";
        this.props.history.push("/change");
    }

    transform_time(timestamp) {
        var date = new Date(timestamp * 1000);
        // Hours part from the timestamp
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[date.getMonth()];
        var day = date.getDate();
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        // var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = month+' '+ day+', '+ hours+':'+ minutes.substr(-2);// + ':' + seconds.substr(-2);
        return formattedTime;
    }

    render() {
        let data = this.props.itemData;
        // console.log(this.index);
        return (
            <div className="item-content scale-1px" >
                <img className="item-img" src={data.url}></img>
                {/**<div className="food">Food</div>*/}
                <div className="item-info-content">
                    <p className="item-title">{data.name}  ( {data.weight} g )</p>
                    <div className="item-desc clearfix">
                        <div className="item-start">Start: {this.transform_time(data.start)}</div>
                        <div className="item-to"></div>
                        <div className="item-end">Expire: {data.end} d</div>
                    </div>
                    {/**<NavLink className="item-change" replace={true} to={"/change"} onClick={()=>this.handle()}>Change</NavLink> */}
                </div>
           </div>
        );
    }
}

export default withRouter(connect(
    // state=>({
    //     list: state.contentListReducer.list
    // })
)(ListItem));
