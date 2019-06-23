import React from 'react';
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {

  render(){
    return (
      <div>
        <Card/>
        <Button/>
      </div>
    );
  }
}

export default App;
