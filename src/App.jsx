import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'

const App = () => {
  return (
    <div className=' py-16 w-full flex flex-col items-center justify-center'>
      <Header/>
      <Balance/>
    </div>
  )
}

export default App
