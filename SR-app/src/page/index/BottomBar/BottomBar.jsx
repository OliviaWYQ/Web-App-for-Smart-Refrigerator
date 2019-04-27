import './BottomBar.scss';

import React from "react";

import { connect } from "react-redux";

import { changeTab } from '../actions/tabAction';
/**
 * @constructor <BottomBar>
 * @description Index Bottom menu-bar
 */

 class BottomBar extends React.Component {
     constructor(props) {
         super(props)
     }
     changeTab(item) {
        // debugger; 
        this.props.dispatch(changeTab({
            activeKey: item.key
         }));
     }
     renderItems(){
         let tabs = this.props.tabs;

         return tabs.map((item,index)=>{
             let cls = item.key + ' btn-item';
             let name = item.name;

             if (item.key === this.props.activeKey) {
                 cls += ' active';
             }
             return (
                 <div key={index} className={cls} onClick={()=>this.changeTab(item)}>
                     <div className="tab-icon"></div>
                     <div className="btn-name">{name}</div>
                 </div>
             )
         })
     }
     render(){
         return(
            <div className='bottom-bar'>
                {this.renderItems()}
            </div>
         )   
     }
 }

 export default connect(
    state => ({
        tabs: state.tabReducer.tabs,
        activeKey: state.tabReducer.activeKey
    })
)(BottomBar);