import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <h1>All working</h1>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
