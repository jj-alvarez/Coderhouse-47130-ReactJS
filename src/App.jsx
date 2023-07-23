import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import './navbar.css'


function App() {

  return (
    <>
        <div className='sitio'>
            <div className='header-area'>


            </div>

            <div className='main-area'>
                <img src={reactLogo} className="logo-react" alt="React logo" />
                <h1>La Biblioteca Escondida</h1>
                <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
                <button className='btn-newsletter'>Newsletter</button>
            </div>

            <div className='footer-area'>
                <p className="read-the-docs">
                    La Biblioteca Escondida | Copyright 2023 | Todos los derechos reservados.
                </p>
            </div>
        </div>
    </>
  )
}

export default App
