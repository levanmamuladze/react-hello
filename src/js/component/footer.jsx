import React from 'react'

const footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-center text-light fixed-bottom py-4">
         Copyright &#169; Your Website {year}
    </footer>
  
  )
}

export default footer;