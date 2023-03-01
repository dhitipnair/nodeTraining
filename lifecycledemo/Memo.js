import React, { useState } from 'react'
import Driver from './Driver';

function App() {
    console.log('App Initialization');
    const [showName, setShowName] = useState(false);
    const handleClick=()=>{
        setShowName(prev=>!prev)
    }
    
  return (
    <div>
        <Driver name="Dheera" show={false} />
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App