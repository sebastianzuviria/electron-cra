import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleTestFinish = (event, args) => {
      console.log(event)
      console.log(args)
      setMessage(args)
    }

    ipcRenderer.on('test-finish', handleTestFinish)

    return () => ipcRenderer.removeListener('test-finish', handleTestFinish)
  })

  const startPlaywright = (message) => {
    ipcRenderer.send('playwright', message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => startPlaywright()}>start Playwright</button>
        <h1 style={{ color: 'white' }}>{message}</h1>
      </header>
    </div>
  );
}

export default App;
