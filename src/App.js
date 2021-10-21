import { useRef, useState } from 'react';
import './App.css';
import Direction from './components/Direction';
// import Map from './components/Map';

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const originREF = useRef("");
  const destinationREF = useRef("");

  const handleDirection = e => {
    e.preventDefault();
    setOrigin(originREF.current.value)
    setDestination(destinationREF.current.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" ref={originREF} name="origin" id="origin" placeholder="Starting Place" />
        <input type="text" ref={destinationREF} name="destination" id="destination" placeholder="Destination" />
        <input type="submit" value="Go" />
      </form>
      {/* <Map></Map> */}
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
