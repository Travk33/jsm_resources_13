import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
//purpose of layout is to get the children(other attributes in page)
const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>

    </>
  )
}

export default layout