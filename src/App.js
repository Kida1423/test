import React, { Component } from 'react'
import './App.css';
import LotteryNumber from './components/Lottery';


class App extends Component {
  render(){
    return (
      <div className="App">
          <LotteryNumber/>
      </div>
    );
  }
}

export default App;
