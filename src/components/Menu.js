import React from 'react'
import Image from './../img/pizza3.jpg'
function Menu() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about_img">
                            <img src={Image} alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO</h1><h1> THIN CRUST</h1>
                        <p>Investigationes demonstraverunt legere me lius guod li
                        legunt saeious. Clarites est etiam processus dynaus, quise
                        sequitur mutationem consuerudium lectorum.
                        </p>
                        <div className="about_btn">
                            <a href="/" className="btn btn-smart"> VIEW MORE </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
