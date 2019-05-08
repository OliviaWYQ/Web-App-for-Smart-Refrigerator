import React from 'react';
// import './TChart.scss';
import Chart from "react-google-charts";

import { connect } from 'react-redux';
import { getListData } from '../../actions/tempAction';

class TempChart extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }

    fetchData(){
        this.props.dispatch(getListData());
    }

    transform_time(timestamp) {
        var date = new Date(timestamp * 1000);
        // Hours part from the timestamp
        // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        // var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = month+'/'+day+' '+hours+':'+ minutes.substr(-2);// + ':' + seconds.substr(-2);
        return formattedTime;
    }

    renderTempItems(){
        let list = this.props.list;
        list.sort((a, b) => a.time - b.time);
        // console.log(list);
        let tempdata = [["Time", "Temperature (℃)"]];
        list.map((item,index)=>{
            if (index >= Object.keys(list).length - 7) {
              tempdata.push([String(this.transform_time(item.time)), parseFloat(item.temp)]);
            }
        });
        // console.log(tempdata);
        return tempdata;
    }

    renderHumidItems(){
        let list = this.props.list;
        let humiddata = [["Time", "Humidity (%)"]];
        list.map((item, index) => {
            if (index >= Object.keys(list).length - 7) {
              humiddata.push([String(this.transform_time(item.time)), parseFloat(item.humid)]);
            }
        });
        return humiddata;
    }
    
    render(){

        // const data = [
        //   ["Time", "Temperature"],
        //   ["Mon", 4.0],
        //   ["Tue", 5.2],
        //   ["Wen", 3.8],
        //   ["Thu", 3.0],
        //   ["Fri", 2.2],
        //   ["Sat", 3.3],
        //   ["Sun", 4.0]
        // ];

        const temp_options = {
          title: "Fridge Temperature",
          curveType: "function",
          legend: {
            position: "bottom"
          }
        };

        const humid_options = {
          title: "Fridge Humidity",
          curveType: "function",
          legend: {
            position: "bottom"
          }
        };

        return (
          <div className="App">
            {/**this.renderItems() */}
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={this.renderTempItems()}
              options={temp_options}
            />
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={this.renderHumidItems()}
              options={humid_options}
            />
          </div>
        )
    }
}

// export default TempChart;
export default connect(
  state=>({
      list: state.tempReducer.list
  })
)(TempChart);