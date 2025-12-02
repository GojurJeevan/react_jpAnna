import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../pages/Product'
import { Projects } from '../pages/Projects'

export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/product' element={<Product />}/>
        </Routes>
    </div>
  )
}
