import React from 'react'

const Filter = ({ filterProduct }) => {
  // use filterProduct here
  return (
    <div className='filter'>
      <select className="form-control form-control-sm" onChange={filterProduct}>
        <option value="">Filter by size</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
  )
}

export default Filter