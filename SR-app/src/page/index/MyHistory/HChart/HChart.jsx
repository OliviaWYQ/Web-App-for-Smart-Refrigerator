import React from 'react';
import './HChart.scss';
import Chart from "react-google-charts";

const data = [
  ["Time", "Humidity"],
  ["Mon", 4.0],
  ["Tue", 5.2],
  ["Wen", 3.8],
  ["Thu", 3.0],
  ["Fri", 2.2],
  ["Sat", 3.3],
  ["Sun", 4.0]
];
const options = {
  title: "Fridge Humidity",
  curveType: "function",
  legend: {
    position: "bottom"
  }
};

class HumidChart extends React.Component {

    render(){
        
        return (
          <div className="App">
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        )
    }
}

export default HumidChart;