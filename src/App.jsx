import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'
import { CarritoProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import { CarouselWithIndicators } from "./components/Carousel"
import React, { useEffect } from "react"
import { useCarousel } from "./hooks/useCarousel"

export const App = () => {
  const { initializeCarousel } = useCarousel();

  useEffect(() => {
    initializeCarousel();
  }, []);

  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <CarouselWithIndicators />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>

  )
}