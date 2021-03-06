import React, { useState } from 'react';
import { Random } from 'basic-helper';
import { ChartCom } from '..';
import { Grid } from '../../grid';

ChartCom.setChartJSPath('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js');
const getMockData = () => ({
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    label: '# of Votes',
    data: [
      Random([0, 20]),
      Random([0, 20]),
      Random([0, 20]),
      Random([0, 20]),
      Random([0, 20]),
      Random([0, 20])
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
});
const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

let chartDOM1;
let chartDOM2;
let chartDOM3;
let chartDOM4;

const renderChart = () => {
  setTimeout(() => {
    chartDOM1.renderChart();
    chartDOM2.renderChart();
    chartDOM3.renderChart();
    chartDOM4.renderChart();
  }, 15);
};
renderChart();

export default () => {
  const [mockData, setData] = useState(getMockData());
  return (
    <div>
      <Grid container className="p10" space={20}>
        <Grid lg={6}>
          <ChartCom
            type="bar"
            id="chartDOM1"
            options={options}
            data={mockData} ref={(e) => { chartDOM1 = e; }} />
        </Grid>
        <Grid lg={6}>
          <ChartCom
            type="line"
            id="chartDOM2"
            options={options}
            data={mockData} ref={(e) => { chartDOM2 = e; }} />
        </Grid>
        <Grid lg={6}>
          <ChartCom
            type="radar"
            id="chartDOM3"
            options={options}
            data={mockData} ref={(e) => { chartDOM3 = e; }} />
        </Grid>
        <Grid lg={6}>
          <ChartCom
            type="pie"
            id="chartDOM4"
            options={options}
            data={mockData} ref={(e) => { chartDOM4 = e; }} />
        </Grid>
        <Grid lg={6}>
          <span className="btn theme" onClick={(e) => {
            setData(getMockData());
            setTimeout(() => {
              renderChart();
            }, 10);
          }}>重新渲染</span>
        </Grid>
      </Grid>
    </div>
  );
};
