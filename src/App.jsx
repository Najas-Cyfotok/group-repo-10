
import Home from '../pages/Home'
import View from '../pages/View'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
    </Routes>
    </>

  )
}

export default App
