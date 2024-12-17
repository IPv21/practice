import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
