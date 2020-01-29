import React from 'react';

class Rate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rate: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value > 100) {
    } else if (!value) {
      this.setState({
        rate: '0'
      })
    } else {
    this.setState({
      rate: value,
    })
    this.props.setState(name, value)
  }
  }

  render () {
    const { rate } = this.state;
    return (
      <>
        <label for="rate">Absence Rate</label>
        <input
          type="number"
          name="rate"
          min="0"
          max="100"
          value={rate}
          onChange={this.handleChange}
        />
      </>
    )
  }

}

export default Rate
