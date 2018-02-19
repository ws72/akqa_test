import React from 'react'
import Filter from './Filter'

const Header = ({ filterProduct }) => {
  return (
    <div className='header'>
      <div className='header__text'>women's top</div>
      <div><Filter filterProduct={filterProduct} /></div>
    </div>
  )
}

export default Header
