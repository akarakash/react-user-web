import React from 'react'
import Banner from './Banner'
import CardPage from './CardPage'
import Phone from './Phone'
import Iphone from './Iphone'
import { useNavigate } from 'react-router-dom'

function Home() {

//  const navigate = useNavigate();
   
//   navigate(`/apipage/`)
  return (
    <>
      <Banner/> 
     <CardPage/>
      {/* <Phone/>  */}
     <Iphone/> 
     
    </>
  )
}

export default Home
