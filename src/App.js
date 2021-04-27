import React from 'react';

import './App.css';
import CreateNews from './components/CreateNews';
import NewsList from './components/NewsList';

function App() {

  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='menu'>
            <h1>News Magazine</h1>
            <div className='menuItems'>
              <p>News</p>
              <p>Opinion</p>
              <p>Sport</p>
              <p>Culture</p>
              <p>Contacts</p>
            </div>
          </div>
        </div>
      </header>
      <CreateNews/>
      <NewsList />
    </div>
  );
}

export default App;
