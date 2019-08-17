import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ApolloProvider } from '@apollo/react-hooks'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import client from './stores/client'

// custom component imports
import Dashboard from './components/dashboard'
function App() {
  const [t] = useTranslation()
  // const [t, i18n] = useTranslation()

  const changeLanguage = () => {
    // i18n.changeLanguage(lng) change language as needed
  }

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{t('Welcome to ABC racing company.')}</p>
          <p>{t('We present to you the winners for the day')}</p>
          <Button onClick={changeLanguage} variant={'contained'}>
            Change language
          </Button>
        </header>
        <Dashboard />
      </div>
    </ApolloProvider>
  )
}

export default App
