import React from 'react'

const ProductsSection = ({ children }) => {
    return (<section>
        <h3>AKQA coding test</h3>
        <div className='products-card-section'>
            <div className="row">
                {children}
            </div>
        </div>
    </section>)
}

export default ProductsSection
