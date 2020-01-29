import React from 'react';

class Salary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      salary: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value < 0) {
      console.log('salary is too low')
    } else {
      this.setState({
        salary: value,
      })
      this.props.setState(name, value)
    }
  }

  render () {
    const { salary } = this.state;
    return (
      <>
        <label for="salary">Average Salary</label>
        <input
          type="number"
          name="salary"
          min="0"
          value={salary}
          onChange={this.handleChange}
        />
      </>
    )
  }

}

export default Salary
