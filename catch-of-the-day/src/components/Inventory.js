import React  from  "react";
import AddFishFOrm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishFOrm />
      </div>
    );
  }
}

export default Inventory;