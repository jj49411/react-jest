import React, { Component } from 'react'
import Header from './components/Header/Header'
import Headline from './components/Headline/Headline'
import Button from './components/Button/Button'
import Picture from './components/Picture/Picture'

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header />
          <section>
            <Headline header='Posts' text='Click the button to see the posts'/>
            <Button />
            <Picture />
          </section>
        </div>
      )
  }
  
}

export default App
