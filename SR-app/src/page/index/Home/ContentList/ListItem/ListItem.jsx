import React from 'react';
import './ListItem.scss';

import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
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

    render() {
        let data = this.props.itemData;
        return (
            <div className="item-content scale-1px" >
                <img className="item-img" src={data.url}></img>
                {/**<div className="food">Food</div>*/}
                <div className="item-info-content">
                    <p className="item-title">{data.name}</p>
                    <div className="item-desc clearfix">
                        <div className="item-start">{data.start}</div>
                        <div className="item-to">to</div>
                        <div className="item-end">{data.end}</div>
                    </div>
                    <NavLink className="item-change" replace={true} to={"/change"} onClick={()=>this.handle()}>Change</NavLink>
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
