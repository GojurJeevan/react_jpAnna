import Header from '../pages/Header'
import AppRouter from '../RouterDom/AppRouter'
import Footer from '../pages/Footer'
import { useLocation } from 'react-router-dom'


export default function MainLayout() {

  let hidePath = ['/','/signup','/login']
  let location = useLocation();

  let componentPath = hidePath.includes(location.pathname)

  return (
    <>
        {!componentPath && <Header />}
        <AppRouter />
        {!componentPath && <Footer />}
    </>
  )
}
