import React from 'react';
import './App.css';
import NavBar from './components/molecules/NavBar';
import QuoteBox from './components/molecules/QuoteBox';
import Form from './components/organisms/Form';
import Header from './components/organisms/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <NavBar />
      <div className="col1"><h2><span class="label">Random Quote Generator</span></h2>
        <QuoteBox />
      </div>
      <div className="col2">
        <Form />
      </div>



    </div>
  );
}

export default App;
