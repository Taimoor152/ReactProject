import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (<div className="banner">
        <Navbar />
        <div className="banner-content">
            <div className="container">
                <div className="banner_text">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZINNI</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                    <div className="banner_btn">
                        <a href="/" className="btn btn-smart">DELIVERY NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Header;

