import React from 'react';
import './App.css';
import NavBar from './components/molecules/NavBar';
import QuoteBox from './components/molecules/QuoteBox';
import Header from './components/organisms/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <NavBar />
      <QuoteBox />


    </div>
  );
}

export default App;
