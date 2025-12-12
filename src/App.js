import './App.css';
import React, { useState } from 'react';
import Door from "./components/Door/Door.js";
import Room from "./components/Room/Room.js";
import Light from "./components/Light/Light.js";
import "@fontsource/itim";

function App() {
  const [inRoom, setInRoom] = useState(false);

  const toggleRoom = () => setInRoom(prev => !prev);

  return (
    <div className='container'>
      {!inRoom ? (
        <div className='main-title'>
          <Light/>
          <h1>SEOKHWAN'S PROTFOLIO</h1>
          <Door onClick={() => setInRoom(true)} />
        </div>
      ) : (
        <Room onExit={toggleRoom} />
      )}
    </div>
  );
}

export default App;
