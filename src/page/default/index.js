import React, { Component } from 'react';
import Button from '../../components/button';
import BizChart from "../../components/BizCharts/index";
import BizClass from "../../components/BizCharts/BizClass";
import PizzaChart from '../../components/PizzaChart';
import LineChart from '../../components/BizCharts/lineChart';


class DefaultPage extends Component {

  constructor(props) {
    super();
    this.state = {
      width: 0
    }
  }
  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    console.log(window.innerWidth)
    this.setState({
      width: window.innerWidth
    })
  }

  render() {

  console.log(this.state)
    const { action } = this.props;

    return (
      <div>
        <BizClass width={this.state.width}/>
        <PizzaChart/>
        <LineChart/>
      </div>
    )
  }
}

export default DefaultPage;