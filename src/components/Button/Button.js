import React, { Component } from 'react'

class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return(
      <div data-test='button-component'>
        <button data-test='button'>+</button>
        <p data-test='counter'>The count is {this.state.counter}</p>
      </div>
    )
  }
  
}

export default Button
