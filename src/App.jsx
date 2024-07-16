// npm modules
import { Routes, Route } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'

// components
import NavBar from './components/NavBar/NavBar'

// styles
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </>
  )
}

export default App
