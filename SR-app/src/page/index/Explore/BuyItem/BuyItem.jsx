import React from 'react';
import './BuyItem.scss';
import { getBuyData } from '../../actions/buyAction';
import { connect } from 'react-redux';
/**
 * @constructor < BuyItem / >
 * @description Explore BuyItem
 */

class BuyItem extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData() {
        this.props.dispatch(getBuyData());
    }

    renderList(list){
        // debugger;
        return list.map((item, index) => {
            return (
                <div className="item-content scale-1px" key={index}>
                    <img className="item-img" src={item.url}></img>
                    <div className="item-info-content">
                        <p className="item-title">{item.name}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        let list = this.props.list;
        return (
            <div className="buy-list">{this.renderList(list)}</div>
        );
    }
}

export default connect(
    state=>({
        list: state.buyReducer.list
    })
)(BuyItem);

// export default BuyItem;