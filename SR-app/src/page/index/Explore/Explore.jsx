import React from 'react';
import './Explore.scss';
import { connect } from 'react-redux';
import { getExploreData } from '../actions/exploreAction';
import ListItem from './ListItem/ListItem';
import BuyItem from './BuyItem/BuyItem';


/**
 * @constructor <Explore />
 * @description Explore Tab
 */

 class Explore extends React.Component {
     constructor(props) {
         super(props);
         this.fetchData();
     }

    fetchData(){
        this.props.dispatch(getExploreData());
    }

    renderList(){
        let list = this.props.list;
        // debugger;
        return list.map((item, index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        });
    }


    render(){
        return (
            <div className="explore">
                <div className="header">COOKING RECIPE</div>
                <div className="explore-list">
                    <div className="recipe-list">{this.renderList()}</div>
                </div>
                <div className="header">GROCERY LIST</div>
                <BuyItem />
                <div className="loading"></div>
            </div>
        );
    }
 }

export default connect(
    state => ({
        list: state.exploreReducer.list,
        // buy: state.buyReducer.buy
    })
)(Explore);