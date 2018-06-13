import React from "react";
import Header from "./Header";
import Fish from "./Fish";
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    //1. take copy of existing state
    const fishes = {...this.state.fishes};
    //2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. set new fishes object to state
    //this.setState({fishes: fishes});
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    //alert('loading sample');
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App;
