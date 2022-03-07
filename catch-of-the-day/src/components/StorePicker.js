import React, { useRef } from "react";
import { getFunName } from "../helpers";

function StorePicker({history}) {
  const myInput = useRef(null);

  const goToStore = (event) => {
    event.preventDefault();
    const storeName = myInput.current.value;
    history.push(`/store/${storeName}`);
  }

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please, enter a store name</h2>
      <input 
        type="text" 
        ref={myInput} 
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()} 
      />
      <button  type="submit">Visit Store</button>
    </form>
    );

}

export default StorePicker;
