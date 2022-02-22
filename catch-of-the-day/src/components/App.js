import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  // Modificar el State
  addFish = (fish) => {
    const fishes = { ...this.state.fishes }; // Hacer una copia del State actual (no se debe cambiar el state original - mutation)
    fishes[`fish${Date.now()}`] = fish; // Agrega el nuevo fish a la variable fishes
    this.setState({ fishes }); // Ponemos ese nuevo estado en el State
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div  className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" /> {/* Esta prop la va a tomar despues el componente Header */}
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory 
        addFish={this.addFish} // Este metodo va a estar disponible en las props de Inventory
        loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;