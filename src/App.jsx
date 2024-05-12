import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Header } from './component/Header'
import { Home } from './vistas/Home'
import { Juego } from './vistas/Juego'
import { GrupoTarjetasCopy } from './component/GrupoTarjetasCopy'
import { Api } from './component/API'
import { SignUp } from './component/SignUp'
import { Login } from './component/Login'
import { useEffect, useState } from 'react'

function App() {

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (

    <div className='bg-orange-400 dark:bg-gray-800 dark:text-white'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/grupoTarjetasCopy" element={<GrupoTarjetasCopy/>}/>
        {token ?<Route path="/api" element={<Api token={token}/>}/>:""}
        <Route path="/juego" element={<Juego/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login setToken={setToken}/>}/>
      </Routes>
    </div>
  )
}

export default App
