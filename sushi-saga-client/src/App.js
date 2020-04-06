import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    start: 0,
    end: 4,
    moneys: 1000000,
  };

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ sushis: resp }));
  }

  addFour = () => {
    console.log("updating....");
    return this.setState({
      start: this.state.start + 4,
      end: this.state.end + 4,
    });
  };

  eatSushi = (cost) => {
    this.setState({ moneys: this.state.moneys - cost });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          start={this.state.start}
          end={this.state.end}
          updateIndexes={this.addFour}
          handleEat={this.eatSushi}
        />
        <Table
          sushis={this.state.sushis}
          moneys={this.state.moneys.toLocaleString(navigator.language, {
            minimumFractionDigits: 0,
          })}
        />
      </div>
    );
  }
}

export default App;
