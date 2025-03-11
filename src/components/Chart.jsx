import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('main-chart'));

    const option = {
      title: {
        text: 'Weekly Workout Trends',
        subtext: 'Minutes Spent on Each Workout Type',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 'bottom',
      },
      series: [
        {
          name: 'Workout Types',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            position: 'outside',
          },
          labelLine: {
            show: true,
          },
          data: [
            { value: 35, name: 'Cardio' },
            { value: 25, name: 'Strength Training' },
            { value: 20, name: 'Yoga' },
            { value: 10, name: 'Other Activities' },
          ],
        },
      ],
    };

    chart.setOption(option);
  }, []);

  return (
    <div id="chart-container">
      <div id="main-chart" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Chart;
