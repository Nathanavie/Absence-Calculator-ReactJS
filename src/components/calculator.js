import React from 'react';
import Employee from './Employees'
import Salary from './Salary'
import Rate from './Rate'
import Losses from './Losses'

class Calculator extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    employee: '',
    salary: '',
    rate: '0',

    monthly: '',
    yearly: '',
  }
}

setStatefromProp = (name, val) => {
  this.setState({
    [name]: val,
  })
}

calcYearly = () => {
  const { employee, salary, rate } = this.state;
  let yearly = ((employee*salary)*(rate/100));
  let monthly = yearly/12;

  this.setState({
    yearly: yearly,
    monthly: monthly.toFixed(2),
  })
}

  render () {
    return (
      <>
        <div className="calc">
          <div className="outputs">
            <Losses yearly={this.state.yearly} monthly={this.state.monthly}/>
          </div>
          <div className="inputs">
            <Employee setState={this.setStatefromProp} employee={this.state.employee} />
            <Salary setState={this.setStatefromProp} salary={this.state.salary} />
            <Rate setState={this.setStatefromProp} rate={this.state.rate} />
          </div>
          <div className="submit">
            <button onClick={this.calcYearly}>Calculate</button>
          </div>
        </div>
      </>
    )
  }

}

export default Calculator
