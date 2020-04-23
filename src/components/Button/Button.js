import React, { Component } from 'react'

class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    return(
      <div data-test='button-component'>
        <button data-test='button' onClick={() => this.setState({ counter: counter + 1 })}>+</button>
        <p data-test='counter'>The count is {counter}</p>
      </div>
    )
  }
  
}

export default Button
