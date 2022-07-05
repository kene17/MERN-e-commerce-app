import React from 'react'
import Product from '../components/Product'
import './HomeScreen.css'
const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <h2 className="homescreen__title">
                <div className="homescreen__products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    
                </div>
            </h2>
        </div>
    )
}

export default HomeScreen
