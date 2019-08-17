import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './stores/client'
// custom component imports
import Dashboard from './components/dashboard'
function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Welcome to ABC racing company.</p>
          <p>We present to you the winners for the day</p>
        </header>
        <Dashboard />
      </div>
    </ApolloProvider>
  )
}

export default App
