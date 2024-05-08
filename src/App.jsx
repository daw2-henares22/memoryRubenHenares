import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Header } from './component/Header'
import { Home } from './vistas/Home'
import { About } from './vistas/About'
import { Juego } from './vistas/Juego'
import { GrupoTarjetas } from './component/GrupoTarjetas'
import { Context } from './component/Context'
import { Api } from './component/API'

function App() {

  return (

    <div className='bg-orange-400'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/grupoTarjetas" element={<GrupoTarjetas/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/juego" element={<Juego/>}/>
        <Route path="/context" element={<Context/>}/>
      </Routes>
    </div>
  )
}

export default App
