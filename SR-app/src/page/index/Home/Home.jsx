import React from 'react';

// import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import ContentList from './ContentList/ContentList.jsx';

/**
 * @constructor <Home />
 * @description Home Tab
 */

 class Home extends React.Component {
     constructor(props) {
         super(props);
     }

     render(){
         return (
             <div>
                <Header />
                <Category />
                <ContentList />
             </div>
         );
     }
 }

 export default connect(
     // state => ({
     //     // num: state.tabReducer.num
     // })
 )(Home);
//  export default withRouter(Home);