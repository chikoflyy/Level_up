  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
import Header from './components/organisms/Header'
import Hero from './components/organisms/pages/Hero'
import Cart from './components/organisms/pages/Cart'
import Bottom from './components/organisms/pages/Buttom'
import Buttom from './components/organisms/pages/Buttom'
import Register from './components/organisms/pages/Register'
import Login_user from './components/organisms/pages/Modal_Login'
import Modal_Login from './components/organisms/pages/Modal_Login'
import Modal_perfil from './components/organisms/pages/Modal_perfil'
import ModalCarrito from './components/organisms/pages/ModalCarrito'
import ModalReseña from './components/organisms/pages/ModalReseña'
import Footer from './components/organisms/pages/Footer'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Header/>
        <Hero/>
        <Cart/>
        <Buttom/>
        <Register/>
        <Modal_Login/>
        <Modal_perfil/>
        <ModalCarrito/>
        <ModalCarrito/>
        <ModalReseña/>
        <Footer/>
      </>
    )
  }

  export default App
