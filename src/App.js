import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import { GlobalContextProvider } from './components/Context/GlobalContext'

/*

App.js is the root component in the tree.  It is the first node that spawns a child, landing page.  

NOTE: Landing page is surrounding in the GlobalContextProvider component.  This allows the state of the application to be
passed down to all children to access

*/

const App = () => {
    return (
      <GlobalContextProvider>
        <LandingPage />  
      </GlobalContextProvider>
    )
}

export default App
