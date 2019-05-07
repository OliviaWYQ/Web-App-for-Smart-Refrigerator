import React from 'react';
import './ContentList.scss';

import { connect } from 'react-redux';
import { getListData } from '../../actions/contentListAction';
import ListItem from './ListItem/ListItem.jsx';

/**
 * @constructor < ContentList / >
 * @description Home ContentList
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();

    }

    fetchData(){
        this.props.dispatch(getListData());
    }

    renderItems(){
        let list = this.props.list;
        return list.map((item, index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        });
    }

    render() {
        return (
           <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>Summary</span>
                    <span className="title-line"></span>
                </h4>
                {this.renderItems()}
                <div className="loading">Completed</div>
           </div>
        );
    }
}

export default connect(
    state=>({
        list: state.contentListReducer.list
    })
)(ContentList);
