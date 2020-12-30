import React from 'react';
import Image1 from '../img/1.png'
import Image2 from '../img/2.png'
import Image3 from '../img/3.png'
import Image4 from '../img/4.png'
import Image5 from '../img/5.png'
import Image6 from '../img/6.png'

function Prices() {
    return (
        <div className="Prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image1} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Pizza Margeritta</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$39</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image2} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Beer Pizza Crust</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$25</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image3} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Pizza Biscuit Bake</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$49</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image4} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Pizza Prosciutto</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$25</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image5} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Crazy Crust Pizza</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$29</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={Image6} alt="pizza" />
                            </div>
                            <h1 className="price_heading">Low Carb Pizza</h1>
                            <p className="price_text">Nullam nibh sem, imperdiet ultrices commodo a,
                            vulputate vel ligula. Duis venenatis at eros sed egestas.
                                 Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                            <p className="price_rs">$49</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prices
