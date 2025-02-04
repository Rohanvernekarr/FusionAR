import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Review from './components/Review'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <div className="max-w-7xl mx-auto pt-10 px-6">
       <Hero />
       <Features />
       <Workflow />
       <div className="max-w-6xl h mx-auto pt-10 px-6">
        <Price />
       </div>
       <Review/>
       <Footer />
      
   </div>
   
  

   
   
   </>
  )
}

export default App