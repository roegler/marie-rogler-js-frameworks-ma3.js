import React from 'react';
import Heading from "./components/heading/Heading";
import NewsList from "./components/list/NewsList";
import HomeContent from "./components/content/HomeContent"
import LoginForm from "./components/forms/LoginForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading title="MA3"/>

      <HomeContent children="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <NewsList />

      <LoginForm />
    </div>
  );
}

export default App;
