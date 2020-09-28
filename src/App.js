import React from 'react';
import Heading from "./components/heading/Heading";
import NewsList from "./components/list/NewsList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading title="MA3"/>

      <NewsList />
    </div>
  );
}

export default App;
