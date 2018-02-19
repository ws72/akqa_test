import React from 'react'

const Filter = ({ filterProduct }) => {
  // use filterProduct here
  return (
    <div className='filter'>
      <select className="form-control form-control-sm">
        <option>Filter by size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
  )
}

export default Filter