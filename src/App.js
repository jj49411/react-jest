import React from 'react';
import Header from './components/Header/Header'
import Headline from './components/Headline/Headline'
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline header='Posts' text='Click the button to see the posts'/>
        <Button />
      </section>
    </div>
  );
}

export default App
