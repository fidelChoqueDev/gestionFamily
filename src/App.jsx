
import { LayoutMain } from './layout/layoutMain'
import './App.css'
import { Routes, Route } from 'react-router'
import { Gastos } from './pages/Gastos'
import { Ingresos } from './pages/Ingresos'
import { Notfound } from './pages/Notfound'

function App() {

  return (
    <LayoutMain>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/gastos" element={<Gastos/>} />
        <Route path="/ingresos" element={<Ingresos/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </LayoutMain>
  )
}

export default App
