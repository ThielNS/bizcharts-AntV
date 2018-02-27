import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Shape, Facet, G2 } from 'bizcharts';

export default class LineChart extends Component {

  constructor(props) {
    super (props);
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
      {time: '10:10', call: 4, waiting: 2, people: 4},
      {time: '10:15', call: 2, waiting: 6, people: 4},
      {time: '10:20', call: 13, waiting: 2, people: 4},
      {time: '10:25', call: 9, waiting: 9, people: 4},
      {time: '10:30', call: 5, waiting: 2, people: 10},
      {time: '10:35', call: 8, waiting: 2, people: 10},
      {time: '10:40', call: 13, waiting: 1, people: 10}
    ];
    const scale = {
      call: {
        min: 0
      },
      people: {
        min: 0,
        max: 10,
      },
      waiting: {
        min: 0
      }
    }

    let chartIns = null;

    let resize = this.props.width <= 600 ? {transpose: true} : {};

    return (
      <Chart height={window.innerHeight} scale={scale} forceFit data={data} onGetG2Instance={(chart) => {
        chartIns = chart;
      }}>
        <Coord {...resize}/>
        <Legend
          custom={true}
          allowAllCanceled={true}
          items={[
            {value: 'waiting', marker: {symbol: 'square', fill: '#3182bd', radius: 5}},
            {value: 'people', marker: {symbol: 'hyphen', stroke: '#ffae6b', radius: 5, lineWidth: 3}}
          ]}
        />
        <Axis
          name="people"
          grid={null}
          label={{
            textStyle: {
              fill: '#fdae6b'
            }
          }}
        />
        <Tooltip/>
        <Geom type="line" position="time*waiting" shape={'city'} color="#3182bd"/>
        <Geom type="line" position="time*people" color="#fdae6b" size={3} shape="city"/>
      </Chart>
    );
  }
}