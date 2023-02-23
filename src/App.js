import './App.css';
import { useState } from 'react';
import foods from './foods.json';


function App() {
  const [allFoods, setAllFoods] = useState(foods);

  // After importing the components we can render them directly:
  return (
    <div className="App">
      <div>
        <p> {foods.name}</p>
        <img src={foods.name} alt={foods.name} width={150} />
      </div>
    </div>
  );
}

export default App;
