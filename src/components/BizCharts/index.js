import React from 'react'
import { Chart, Axis, Geom, Tooltip, Legend, Coord } from 'bizcharts';

import DataSet from '@antv/data-set';

const data = [
  {
    name: 'Equipamento sla',
    '1.': 18.9,
    'Feb.': 28.8,
    'Mar.': 39.3,
    'Apr.': 81.4,
    'May': 47,
    'Jun.': 20.3,
    'Jul.': 24,
    'Aug.': 35.6,
    color: 'red'
  },
  {
    name: 'Berlin',
    '1.': 12.4,
    'Feb.': 23.2,
    'Mar.': 34.5,
    'Apr.': 99.7,
    'May': 52.6,
    'Jun.': 35.5,
    'Jul.': 37.4,
    'Aug.': 42.4,
    color: 'blue'
  }
];

const DataSetView = new DataSet.View ().source (data);

DataSetView.transform ({
  type: 'fold',
  fields: ['1.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
  key: 'month', // key字段
  value: 'value', // value字段
});

console.log (DataSetView);

const BizChart = () => {

  const responsive = window.innerWidth <= 600 ? {transpose:true} : {};

  return (
    <Chart height={400} data={DataSetView} forceFit={true}
    >
      <Coord {...responsive}/>


      <Legend/>
      <Axis name="month"/>
      <Axis name="value"/>
      <Tooltip/>
      <Geom type='intervalStack' position="month*value" color={['name', (name) => {
        if (name === 'Berlin') {
          return 'rgba(100,255,100,.5)'
        }
      }]} style={{stroke: '#fff', lineWidth: 1}}/>
    </Chart>
  )
};

export default BizChart;