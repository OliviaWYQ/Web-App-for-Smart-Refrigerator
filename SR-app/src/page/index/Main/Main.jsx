import React from 'react';

import { connect } from 'react-redux';

// import { addTodo } from '../actions/tabAction.js';

import BottomBar from '../BottomBar/BottomBar';

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
            <BottomBar />
          </div>
        );
    }
}

export default connect(
    state => ({
        // num: state.tabReducer.num
    })
)(Main);