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

    renderTemp(){
        let items = this.props.items;
        let temp = [];
        items.map((item)=>{
            temp.push(item.temp);
        });
        return parseInt(temp.slice(-1));
    }

    renderHumid(){
        // debugger;
        let items = this.props.items;
        let humid = [];
        items.map((item)=>{
            humid.push(item.humid);
        });
        return parseInt(humid.slice(-1));
    }

    render() {
        return (
            <div className="category-content clearfix">
                <div className="category-item">
                    <img className="item-icon" src="https://img.icons8.com/ultraviolet/100/000000/temperature.png"></img>
                    <p className="item-name">Temp</p>
                    <p className="item-data">{this.renderTemp()} ℃ </p>
                </div>
                <div className="category-item">
                    <img className="item-icon" src="https://img.icons8.com/ultraviolet/100/000000/humidity.png"></img>
                    <p className="item-name">Humid</p>
                    <p className="item-data">{this.renderHumid()} % </p>
                </div>
            </div>
        );
    }
}

export default connect(
    state=>({
        items: state.categoryReducer.items
    })
)(Category);
// export default Category;