// npm modules
import { Routes, Route } from 'react-router-dom'

// pages
import Landing from './pages/Landing/Landing'
import SneakerList from './pages/SneakerList/SneakerList'
import NewSneaker from './pages/NewSneaker/NewSneaker'
import SneakerPage from './pages/SneakerPage/SneakerPage'
import EditSneaker from './pages/EditSneaker/EditSneaker'

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
        <Route path='/sneakers' element={<SneakerList/>} />
        <Route path="/sneakers/new" element={<NewSneaker/>} />
        <Route path='/sneakers/:sneakerId' element={<SneakerPage />} />
        <Route path='/sneakers/:sneakerId/update' element={<EditSneaker />} />
      </Routes>
    </>
  )
}

export default App
