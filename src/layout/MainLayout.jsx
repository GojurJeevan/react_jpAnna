import React, { useState } from 'react'
import Header from '../pages/Header'
import AppRouter from '../RouterDom/AppRouter'
import Footer from '../pages/Footer'


export default function MainLayout() {

  const [isUser,setIsUser] = useState(true)

  return (
    <div>
        {!isUser && <Header />}
        <AppRouter />
        {!isUser && <Footer />}
    </div>
  )
}
