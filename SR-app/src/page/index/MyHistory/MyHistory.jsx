import React from 'react';
import './MyHistory.scss';
import TempChart from './TChart/TChart.jsx';
// import HumidChart from './HChart/HChart.jsx';
import CalChart from './CChart/CChart.jsx';

class History extends React.Component {
    render(){
        return (
            <div className="history">
                <div className="header">
                    <img className="avatar" src="https://img.icons8.com/color/100/000000/ninja-head.png"></img>
                    <p className="nickname">Jack Chen</p>
                </div>
                <div className="TempChart"></div>
                <TempChart />
                <div className="CalChart"></div>
                < CalChart / >
                <div className="loading"></div>
            </div>
        )
    }
}

export default History;