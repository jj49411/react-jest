import React from 'react';
import Header from './components/Header/Header'
import Headline from './components/Headline/Headline'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Headline header='Posts' text='Click the button to see the posts'/>
      </section>
    </div>
  );
}

export default App;
