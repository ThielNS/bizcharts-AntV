import React from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';

import { DataView } from '@antv/data-set';

const data =  [
  {item:'Wesley' , count:.15 , test: 15},
  {item:'Rodrigo' , count:.32 },
  {item:'Gabriel' , count:.32 },
];

const dataView = new DataView();
dataView.source(data).transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});

const cols= {
  percent: {
    formatter: val => {
      const value = val * 100;
      val = value.toFixed(2) + '%';
      return val;
    }
  }
};

const PizzaChart = () => {
  return (
    <Chart height={400} data={dataView} scale={cols}  forceFit>
      <Coord type='theta' radius={0.75} />
      <Axis name="percent" />
      <Tooltip
        showTitle={false}
        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      />
      <Legend/>
      <Geom
        type="intervalStack"
        position="percent"
        color='item'
        tooltip={['item*percent',(item, percent) => {
          const value = percent * 100;
          percent = value.toFixed(2) + '%';
          return {
            name: item,
            value: percent
          };
        }]}
        style={{lineWidth: 1,stroke: '#fff'}}
      >
        <Label content='percent' offset={-40} textStyle={{
          rotate: 0,
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }} />
      </Geom>
    </Chart>
  )
};

export default PizzaChart;