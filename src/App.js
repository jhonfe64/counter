
import React, {useState} from 'react'


function App() {

  const counter_button = {
    fontSize: "1rem",
    padding: "5px 10px",
    color:  "#585858"
}


  const [quantity, setQuantity] = useState(0);

  const increase = () =>{
    setQuantity(quantity+1);
  }
  return (
    <div>
        <p>{quantity}</p>
        <button style={counter_button} onClick={increase} >Click</button>
    </div>
  );
}

export default App;
