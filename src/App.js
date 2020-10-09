import React, { useState, useEffect } from 'react';
import './App.css';



function App()  {
  const [characters, setCharacters] = useState('')

useEffect(() => {
  
  fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .then(response => response.data)
    .then(myCharacters => {
      console.log(myCharacters);
      setMyCharacters(myCharacters)
    });
    
}, [])




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
          <button onClick={() => (myCharacters)}>
    See details here!
    </button>
    </div>
  );
}

export default App;
