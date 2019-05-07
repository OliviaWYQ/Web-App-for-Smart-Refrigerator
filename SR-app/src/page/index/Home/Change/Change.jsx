import React from 'react';
import './Change.scss';

import { connect } from 'react-redux';
import NavHeader from '../../../../component/NavHeader/NavHeader.jsx';
import { getListData } from '../../actions/contentListAction';
import TextView from './TextView/TextView';
// import { Button } from 'react-native';
/**
 * @constructor < Change / >
 * @description Home Change ListItem
 */

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
        this.state = {
            category: '',
            start: '',
            end: '',
        };
    }

    fetchData(){
        this.props.dispatch(getListData());
    }

    handleChange(event) {
        this.setState({
            category: event.target.category,
            start: event.target.start,
            end: event.target.end
        });
    }

    handleSubmit(event) {
        // Alert.alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        let data = this.props.list;
        return (
            <div className="content">
                <NavHeader title="Change Value" />
                <div className="empty"></div>
                <div className="change-content" >
                    <p className = "change-head" > Image </p>
                    <img className="change-img" src={data.url}></img>
                </div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="change-info-header clearfix">
                        <p className = "change-head"> Category </p>
                    </div>
                    <div className="change-info-content clearfix">
                        <div className = "change-text">
                            <p className="change-title"></p>
                            <TextView value={this.state.category} onChange={this.handleChange} placeholder = {"Change Category"} />
                        </div>
                    </div>
                    <div className="change-info-header clearfix">
                        <p className = "change-head"> Expire </p>
                    </div>
                    <div className="change-info-content clearfix">
                        <div className = "change-text">
                            <div className="change-end"></div>
                            <TextView value={this.state.end} placeholder = {"Change End Date"} />
                        </div>
                    </div>
                    <div className = "submit clearfix">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            
        );
    }
}

export default connect(
    state=>({
        list: state.contentListReducer.list
    })
)(Change);
