import { useState } from 'react';
import ColorPicker from './components/CheckColor';
import './App.css'


function App() {
  
  const [color, setColor] = useState("#ffce01");

  const handleChange = (event) => {
   setColor(event.target.value);
   };

  return (
      <div className="app">
        <header>
         <h1>Color Picker</h1>
          <div className="container">
           <div className="color-box"
               style={{ backgroundColor: color }}>
               <span className="color-hex">Selected color: {color}</span> 
             </div>
          </div>
        
          <ColorPicker 
            onChange={handleChange} 
            label="Select a color:" 
            id="RGB"
            value={color}
            />
        </header>
      </div>
  )
}

export default App


