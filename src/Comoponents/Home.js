import React from 'react'
import Navbarr from './Navbarr'
import Banner from './Banner'
import CardPage from './CardPage'
import Phone from './Phone'
import Iphone from './Iphone'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Home() {

//  const navigate = useNavigate();
   
//   navigate(`/apipage/`)
  return (
    <div>
     <Banner/>
     <CardPage/>
     <Phone/>
     <Iphone/>
    </div>
  )
}

export default Home
