import React from 'react';
import '../styles/LandingPage.css';
import HomeEffect from './HomeEffect';

const LandingPage = () => {
    return (
        <>
            <HomeEffect />
            <div className="landing-page">
                <header className="header">
                    <div className='container'>
                        <div style={{ display: "flex" }} className="logo">
                            <img src="/flahybaseIcon.png" alt="FlahyRecovery" />
                            <p>FLAHYRECOVERY</p>
                        </div>
                    </div>
                </header>

                <div className="content">
                    <div className="container">
                        <div className="text-section">
                            <h1>Coming Soon..</h1>
                            <h2>
                                Enabling Precision <br /> with <span className="highlight">AI</span>
                            </h2>
                            <p>
                                <span>
                                    FlahyRecovery™ is an algorithmic immune subtyping test that leverages
                                    Artificial Intelligence to analyze the Tumor Microenvironment (TME).
                                </span>
                                The report aids in designing a precise treatment and improving health
                                outcomes.
                            </p>
                            <button className="register-button">Register Interest</button>
                        </div>

                        <div className="image-section">
                            {/* <div className="image-circle">
                        <img src="woman.jpg" alt="Woman in field" />
                    </div> */}
                            <div className="product-box">
                                <img src="/productImage.png" alt="FlahyRecovery Product" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <footer className="footer">
                <p>
                    Want to know more or get the FlahyRecovery™ test done? Please enter your
                    email and our team will get in touch with details and updates.
                </p>
                <div className="email-section">
                    <input
                        type="email"
                        placeholder="Enter Your Email for Latest Update"
                        className="email-input"
                    />
                    <button className="submit-button">Submit</button>
                </div>
                <div className="footer-text">
                    <p>© 2024 © Flahybase. All Rights Reserved | Powered By Flahybase.com</p>
                </div>
            </footer> */}
            </div>
        </>
    );
};

export default LandingPage;
