import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://youtube.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rubick's Cube Solver</h1>
      <h2>Welcome to Rubix, The only solver you need.</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick ={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
          You're GAY.
        </button>
      </div>
      <p className="read-the-docs" onClick={() => window.open("https://www.instagram.com/krishankkureti")}>
        Click on this to learn more
      </p>
    </>
  )
}

export default App
