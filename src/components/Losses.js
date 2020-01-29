import React from 'react';

const Losses = props => {
  return (
    <>
    <p>Yearly Loss: £{props.yearly}</p>
    <p>Monthly Loss: £{props.monthly}</p>
    </>
  )
}
export default Losses
