import React from 'react';

class Employee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      employee: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      console.log('please add more employees')
    } else {
      this.setState({
        employee: value,
      })
      this.props.setState(name, value)
    }
  }

  render () {
    const { employee } = this.state;
    return (
      <>
        <label for="employee">Employee</label>
        <input
          type="number"
          min="0"
          name="employee"
          value={employee}
          onChange={this.handleChange}
        />
      </>
    )
  }

}

export default Employee
