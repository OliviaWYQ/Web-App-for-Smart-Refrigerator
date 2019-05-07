import React from 'react';
import './ListItem.scss';

import { connect } from 'react-redux';
// import { getListData } from '../../actions/contentListAction';
/**
 * @constructor < ListItem / >
 * @description Explore ListItem
 */

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.fetchData();
    }

    renderProduct(data) {
        let list = data.recipe.ingredients;
        list.push({type: 'more'});
        return list.map((item, index)=>{
            if (item.type === 'more') {
                return (
                    <div className="product-item" key={index}>
                        <span>...</span>
                        <div className="p-total-cal">
                            Total {parseInt(data.recipe.calories)} calories
                        </div>
                    </div>
                )
            }
            return <div className="product-item" key={index}>{item.text}</div>
        })
    }

    handle(data) {
        window.location.href = data.recipe.url;
    }

    render() {
        let data = this.props.itemData;
        return (
            <div className="explore-item" onClick={()=>this.handle(data)}>
                <div className="explore-item-inner">
                    <img className="item-img" src={data.recipe.image} />
                    <div className="item-right">
                        <div className="item-top">
                            <p className="recipe-name one-line">{data.recipe.label}</p>
                            {/**<div className="calory">xx cal</div> */}
                        </div>
                        <div className="item-bottom">
                            {this.renderProduct(data)}
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default connect(
    // state=>({
    //     list: state.exploreReducer.list
    // })
)(ListItem);
