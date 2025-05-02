import React from 'react'
import { Header } from '../Layout/Header/Header'
import Carrousel from '../Components/Carrousel/carrousel'
import { Footer } from '../Layout/Footer/Footer'

export const Home = () => {
  return (
    <>
    <Header/>
    <h1>Pagina en Construccion Municipalidad de Chamical</h1>
    <Carrousel style={{ padding: '20px', marginBottom: '50px', position: 'relative' }} />
    <Footer/>
    
    </>
  )
}
