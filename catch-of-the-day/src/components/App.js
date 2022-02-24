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

  // Se ejecuta cuando se carga la pagina
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
  }

  // Se ejecuta cuando se actualiza algo en la pagina (agrego un item en order)
  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  // Modificar el State
  addFish = (fish) => {
    const fishes = { ...this.state.fishes }; // Hacer una copia del State actual (no se debe cambiar el state original - mutation)
    fishes[`fish${Date.now()}`] = fish; // Agrega el nuevo fish a la variable fishes
    this.setState({ fishes }); // Ponemos ese nuevo estado en el State
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div  className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" /> {/* Esta prop la va a tomar despues el componente Header */}
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key} 
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder} 
                index={key}
                />)}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
        />
        <Inventory 
          addFish={this.addFish} // Este metodo va a estar disponible en las props de Inventory
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes} 
        />
      </div>
    );
  }
}

export default App;