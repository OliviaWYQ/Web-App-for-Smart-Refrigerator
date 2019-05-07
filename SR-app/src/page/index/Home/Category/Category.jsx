import React from 'react';
import './Category.scss';

import { connect } from 'react-redux';
import { getHeaderData } from '../../actions/categoryAction';
/**
 * @constructor < Category / >
 * @description Home Category
 */

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getHeaderData());
    }

    renderItems(){
        let items = this.props.items;

        return items.map((item, index)=>{
            return (
                <div className="category-item" key={index}>
                    <img className="item-icon" src={item.url}></img>
                    <p className="item-name">{item.name}</p>
                    <p className="item-data">{item.data}</p>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="category-content clearfix">{this.renderItems()}</div>
        );
    }
}

export default connect(
    state=>({
        items: state.categoryReducer.items
    })
)(Category);
// export default Category;