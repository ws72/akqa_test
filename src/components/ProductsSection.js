import React from 'react'

const ProductsSection = ({ children }) => {
    return (
    <section>
        <div className='products-card-section'>
            <div className="row">
                {children}
            </div>
        </div>
    </section>)
}

export default ProductsSection
