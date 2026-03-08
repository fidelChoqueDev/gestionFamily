
import { Navbar } from './components/Navbar'
//import './App.css'
import { Routes, Route } from 'react-router'
import { Gastos } from './pages/Gastos'
import { Ingresos } from './pages/Ingresos'
import { Notfound } from './pages/Notfound'
import { Home } from './pages/Home'
import { Programas } from './components/Programas/Programas'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gastos" element={<Gastos/>} />
        <Route path="/ingresos" element={<Ingresos/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Programas/>
    </div>
  )
}

export default App
