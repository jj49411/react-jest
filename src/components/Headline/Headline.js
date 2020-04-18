import React, { Component } from 'react'

class Headline extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { header, text } = this.props

    if(!header) {
      return null
    }
    return(
      <div data-test='headline-div'>
        <h1 data-test='headline-header'>{header}</h1>
        <p data-test='headline-text'>{text}</p>
      </div>
    )
  }
}

export default Headline
