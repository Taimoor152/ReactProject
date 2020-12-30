import React from 'react'
import Image from './../img/pizza1.jpg'
function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZZINI</h1>
                        <p>Investigationes demonstraverunt legere me lius guod li
                        legunt saeious. Clarites est etiam processus dynaus, quise
                        sequitur mutationem consuerudium lectorum.
                        </p>
                        <div className="about_btn">
                            <a href="/" className="btn btn-smart"> READ MORE </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_img">
                            <img src={Image} alt="pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
