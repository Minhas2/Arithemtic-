import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className='main' >
      <div className="bg_1"> 

        <Header />
        <div className='main-content'> {children} </div>
        <Footer />

      </div>

      </div>
    </>
  )
}
