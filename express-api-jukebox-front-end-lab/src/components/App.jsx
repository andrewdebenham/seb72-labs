import { useState } from 'react';
import '../App.css';

import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <h1>Jukebox</h1>
      <Dashboard />
      </>
    </>
  )
}

export default App;
