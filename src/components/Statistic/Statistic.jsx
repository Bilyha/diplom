import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import './statistic.css';

const array = [
  [
    ['', ''],
    [1,-0.04843344 ],
    [2,-0.04840754 ],
    [3,-0.04448853 ],
    [4,-0.0366765, ],
    [5,-0.03277425 ],
    [6,-0.02497421 ],
    [7,-0.02107973 ],
    [8,-0.013283  ],
    [9,-0.00938759 ],
    [10,-0.00158567],
    [11, 0.01012396],
    [12, 0.01793951],
    [13, 0.02966986],
    [14, 0.04531728],
    [15, 0.05708306],
    [16, 0.06497535],
    [17, 0.07679815],
    [18, 0.08475713],
    [19, 0.09665253],],
  [
    ['', ''],
    [1, 0.00129485],
    [2, 0.19595066],
    [3,0.39060128],
    [4, 0.19511254],
    [5, 0.39000203],
    [6, 0.19472406],
    [7, 0.38983652],
    [8, 0.19477061],
    [9, 0.39009594],
   [10, 0.58548124],
   [11, 0.39077752],
   [12, 0.58651789],
   [13, 0.78237059],
   [14, 0.58828926],
   [15, 0.39461432],
   [16, 0.59114009],
   [17, 0.39794915],
   [18, 0.59476966],
   [19, 0.79162292],
 ],
 [
   ['', ''],
   [1, 0.01490161],
   [2,  0.0142466],
   [3,0.01750529],
   [4, 0.01687393],
   [5, 0.0123548 ],
   [6, 0.01175173],
   [7, 0.01506369],
   [8, 0.02229107],
   [9, 0.03343554],
  [10, 0.04849977],
  [11, 0.06748688],
  [12, 0.09039966],
 ],
 [
   ['', ''],
   [1, -0.03275022],
   [2,  0.16293448],
   [3,-0.031568  ],
   [4, -0.22595681],
   [5, -0.0301535 ],
   [6,  0.16559823],
   [7,  0.36136889],
   [8,  0.55722358],
   [9,  0.75321162],
  [10,  0.94935557],
  [11,  1.14563859],
  [12,  1.34198997],
 ],
];
export default class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 1,
      optionsFirst: {
        title: 'Observation - Step ',
        hAxis: { title: 'Step' },
        vAxis: { title: 'Observation'},
        legend: 'none',
      },
      optionSec: {
        title: 'Reward - Step ',
        hAxis: { title: 'Step'},
        vAxis: { title: 'Reward'},
        legend: 'none',
      },
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const changedValue = event.target.value;
    const value = parseInt(changedValue, 10);
    this.setState({
      firstValue: value,
      secondValue: value + 1,
    });
  }
  render() {
    return (
      <div className="statistic">
        <select size="1" onChange={this.handleSelectChange}>
          <option value="0">1 episod</option>
          <option value="2">2 episod</option>
          <option value="4">3 episod</option>
          <option value="5">4 episod</option>
          <option value="6">5 episod</option>
          <option value="5">6 episod</option>
          <option value="6">7 episod</option>
          <option value="7">8 episod</option>
          <option value="8">9 episod</option>
          <option value="9">10 episod</option>
          <option value="10">11 episod</option>
          <option value="11">12 episod</option>
          <option value="12">13 episod</option>
          <option value="13">14 episod</option>
          <option value="14">15 episod</option>
          <option value="15">16 episod</option>
          <option value="16">17 episod</option>
          <option value="17">18 episod</option>
          <option value="18">19 episod</option>
          <option value="19">20 episod</option>
          <option value="20">21 episod</option>
        </select>
        <Chart
          chartType="LineChart"
          data={array[this.state.firstValue]}
          options={this.state.optionsFirst}
          graph_id="ScatterChart"
          width="1000px"
          height="300px"
          legend_toggle
        />
        <Chart
          chartType="LineChart"
          data={array[this.state.secondValue]}
          options={this.state.optionSec}
          graph_id="ScatterChar1t"
          width="1000px"
          height="300px"
          legend_toggle
        />
      </div>
    )
  }
}
