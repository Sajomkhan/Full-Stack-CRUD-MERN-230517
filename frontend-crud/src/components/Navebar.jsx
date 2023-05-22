import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <nav>
        <Link className='nav-link' to='/' >Products</Link>
        <Link className='nav-link' to='/add-product' >Add Product</Link>
    </nav>
  )
}

export default Navebar