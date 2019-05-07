import React from 'react';

import { connect } from 'react-redux';

import { Route, withRouter } from 'react-router-dom';
// import { addTodo } from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar';

import Home from '../Home/Home';
import Explore from '../Explore/Explore';
import MyHistory from '../MyHistory/MyHistory';
import Change from '../Home/Change/Change.jsx';

class Main extends React.Component {

  constructor(props) {
        super(props);
        // this.props.num;
    }

    // click(){
    //     this.props.dispatch(addTodo({
    //         num: 10
    //     }));
    // }

    render(){
        // let num = this.props.num;
        return (
          <div>
              <Route exact path="/home" component={Home}/>
              <Route path="/change" component={Change}/>
              <Route path="/history" component={MyHistory}/>
              <Route path="/explore" component={Explore}/>
              <BottomBar />
          </div>
        );
    }
}

export default withRouter(connect(
    // state => ({
    //     // num: state.tabReducer.num
    // })
)(Main));