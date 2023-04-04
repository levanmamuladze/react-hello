import React from 'react'

const footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container-fluid bg-dark text-center text-light py-4">
      <footer>
          <div>Copyright &#169; Your Website {year}</div>
      </footer>
    </div>
   
  )
}

export default footer;