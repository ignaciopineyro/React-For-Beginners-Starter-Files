import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  /* Uso del constructor
  constructor() { // Constructor es lo que se ejecuta antes de crear la class
    super(); // Hay que ejecutar esto antes porque se tiene que crear el componente Reac.Component primero
    this.goToStore = this.goToStore.bind(this); // Es necesario para usar el "this" en otros metodos de StorPicker
  } */

  // Puedo hacer uso del this usando de createRef en lugar de usar el constructor
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value; // Para acceder a this aca hay que definir el constructor de la clase o usar el createRef
    this.props.history.push(`/store/${storeName}`); // Accedemos al Router a traves de sus props (en particular history)
  }
	render() {
		return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please, enter a store name</h2>
        <input 
          type="text" 
          ref={this.myInput} 
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button  type="submit">Visit Store</button>
      </form>
      );
	}
}

export default StorePicker;