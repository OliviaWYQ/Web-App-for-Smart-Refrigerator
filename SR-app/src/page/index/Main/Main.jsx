import React from 'react';

import { connect } from 'react-redux';

// import { addTodo } from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar';

// import Home from '../Home/Home';
// import Explore from '../Explore/Explore';
import History from '../History/History';

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
            {/*<div className={'abc'} onClick={() => this.click()}>{num}</div>*/}
            {/*<Home /> */}
            {/**<Explore /> */}
            <History />
            <BottomBar />
          </div>
        );
    }
}

export default connect(
    // state => ({
    //     // num: state.tabReducer.num
    // })
)(Main);