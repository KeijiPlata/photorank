import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Homepage from './pages/Homepage'
import GetImages from './GetImages'
import Profilepage from './pages/Profilepage'
import Rankingpage from './pages/Rankingpage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    
    <Router>
    <Routes>
    <Route exact path='/' element={<Login />} />
    <Route path='/homepage' element={<Homepage />} />
    <Route path='/rankingpage' element={<Rankingpage />} />
    <Route path='/profilepage' element={<Profilepage />} />
    <Route path='/registration' element={<Registration />} />
    </Routes>
    </Router>
    
  )
}

export default App
