import React, { useState } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

function App() {
  const [fishes, setFishes] = useState(null);
  const [order, setOrder] = useState(null);

/*class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };*/

  /*// Se ejecuta cuando se carga la pagina
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
  }*/

  addFish = (fish) => {
    const fishes = { ...fishes };
    fishes[`fish${Date.now()}`] = fish;
    setFishes({ fishes });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...fishes };
    fishes[key] = updatedFish;
    setFishes({ fishes });
  };

  addToOrder = (key) => {
    const order = {...order};
    order[key] = order[key] + 1 || 1;
    setOrder({ order });
  }

  loadSampleFishes = () => {
    setFishes({ fishes: sampleFishes });
  }

 
  return (
    <div  className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map(key => 
            <Fish 
              key={key} 
              details={fishes[key]} 
              addToOrder={addToOrder} 
              index={key}
              />)}
        </ul>
      </div>
      <Order 
        fishes={fishes} 
        order={order} 
      />
      <Inventory 
        addFish={addFish}
        updateFish={updateFish}
        loadSampleFishes={loadSampleFishes}
        fishes={fishes} 
      />
    </div>
    );
  }

export default App;