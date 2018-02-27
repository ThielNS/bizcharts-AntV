import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip, Legend, Coord } from 'bizcharts';

import DataSet from '@antv/data-set';


export default class BizClass extends Component {

  constructor (props) {
    super(props);
    this.state = {
      coord: {
        transpose: true
      }
    }
  }


  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }

  render() {

    const data = [
      {
        name: 'Equipamento sla',
        '1.': 18.9,
        'AAAA.': 28.8,
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
        'AAAA.': 23.2,
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
      fields: ['1.', 'AAAA.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
      key: 'month', // key字段
      value: 'value', // value字段
    });

    const { coord } = this.state;

    console.log(this.props.height, 'altura')

    let resize = this.props.width <= 600 ? { transpose: true } : {};

    return (
      <Chart height={400} data={DataSetView} forceFit={true} style={{backgroundColor: 'black'}}
      >
        <Coord {...resize} />
        <Legend/>
        <Axis name="month"/>
        <Axis name="value"/>
        <Tooltip/>
        <Geom type='intervalStack' position="month*value" color={['name', (name) => {
          if (name === 'Berlin') {
            return 'rgba(100,255,100,.5)'
          }
        }]} style={{stroke: '#fff', lineWidth: 1}}/>
      </Chart>);
  }
}