import './BottomBar.scss';

import React from "react";

import { connect } from "react-redux";

import { NavLink, withRouter } from 'react-router-dom';

// import { changeTab } from '../actions/tabAction';
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
        // this.props.dispatch(changeTab({
        //     activeKey: item.key
        //  }));
        this.props.history.replace(item.key);
     }
     renderItems(){
         let tabs = this.props.tabs;

         return tabs.map((item,index)=>{
             let cls = item.key + ' btn-item';
             let name = item.name;

            //  if (item.key === this.props.activeKey) {
            //      cls += ' active';
            //  }
             return (
                <NavLink key={index} className={cls} replace={true} to={"/" + item.key} activeClassName="active" onClick={()=>this.changeTab(item)}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{name}</div>
                </NavLink>
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

 export default withRouter(connect(
    state => ({
        tabs: state.tabReducer.tabs,
        activeKey: state.tabReducer.activeKey
    })
)(BottomBar));