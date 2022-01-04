import { Component } from 'react';
import './App.css';
import Timer from './components/Timer/Timer'

class App extends Component {
  state = {
    timeMs: 900000,
    timeMins: 15
  };

  changeTime = (min) => {
    this.setState({
      timeMins: min,
      timeMs: min * 60000
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Stir Often:</h1>
          <h2>Segmented Timer Tool</h2>
          <Timer timeMs={this.state.timeMs} timeMins={this.state.timeMins} changeTime={this.changeTime}/>
        </header>
      </div>
    );
  }
}

export default App;
