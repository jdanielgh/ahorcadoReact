import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
        <Header titulo={"Ahorcado"} year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
