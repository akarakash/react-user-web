import React from 'react'
import Banner from './Banner'
import CardPage from './CardPage'
import Iphone from './Iphone'
import { useNavigate } from 'react-router-dom'
import Phone from './Phone'

function Home() {
  return (
    <>
     <Banner/> 
     <CardPage/>
     <Phone/>
     <Iphone/> 
     
    </>
  )
}

export default Home
