import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import { GlobalContextProvider } from './components/Context/GlobalContext'

const App = () => {
    return (
      <GlobalContextProvider>
        <LandingPage />  
      </GlobalContextProvider>
    )
}

export default App
