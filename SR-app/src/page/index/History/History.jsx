import React from 'react';
import './History.scss';
// import Chart from './Chart/Chart';

class History extends React.Component {
    render(){
        return (
            <div className="history">
                <div className="header">
                    <img className="avatar" src="https://img.icons8.com/ios/100/000000/user-male-circle.png"></img>
                    <p className="nickname">Jack</p>
                </div>
                <div className="TempChart"></div>
                {/**<Chart /> */}
                <div className="HumidChart"></div>
                <div className="CalChart"></div>
            </div>
        )
    }
}

export default History;