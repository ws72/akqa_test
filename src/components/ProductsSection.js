import React from 'react'
import Header from './Header.js'

const ProductsSection = ({ children }) => {
    return (<section>
        <h3>AKQA coding test</h3>
        <div className='products-card-section'>
            <Header />
            <div className="row">
                {children}
            </div>
        </div>
    </section>)
}

export default ProductsSection
