import React, { useState } from 'react';

import './App.css';

// Components

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="App">
      <Nav
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
      />
      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
