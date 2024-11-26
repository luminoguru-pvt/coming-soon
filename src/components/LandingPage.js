import React, { useRef } from 'react';
import '../styles/LandingPage.css';
import HomeEffect from './HomeEffect';

const LandingPage = () => {
    const emailSectionRef = useRef();
    const emailRef = useRef(null);
    const handleRegisterClick = () => {
        if (emailRef.current) {
            emailRef.current.scrollIntoView({ behavior: "smooth" });
            emailRef.current.focus();
        }
        if (emailSectionRef) {
            emailSectionRef.current.classList.add("focussed");
        }
    }
    return (
        <>
            <HomeEffect />
            <div className="landing-page">
                <header className="header">
                    <div className='container'>
                        <div style={{ display: "flex", alignItems: "center" }} className="logo">
                            <img src="/flahybaseIcon.png" alt="FlahyRecovery" />
                            <p><b>FLAHY</b>RECOVERY</p>
                        </div>
                    </div>
                </header>

                <div className="content">
                    <div className="container coming-soon">
                        <div className="text-section">
                            <h1>Coming Soon..</h1>
                            <h2>
                                Enabling Precision with <span className="highlight">AI</span>
                            </h2>
                            <p>
                                <span>
                                    FlahyRecovery™ is an algorithmic immune subtyping test that leverages
                                    Artificial Intelligence to analyze the Tumor Microenvironment (TME).
                                </span>
                                The report aids in designing a precise treatment and improving health
                                outcomes.
                            </p>
                            <button onClick={handleRegisterClick} className="register-button">Register Interest</button>
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

                <footer className="footer">
                    <p>
                        Want to know more or get the FlahyRecovery™ test done? Please enter your
                        email and our team will get in touch with details and updates.
                    </p>
                    <div ref={emailSectionRef} className="email-section">
                        <input
                            ref={emailRef}
                            id='email-input'
                            type="email"
                            placeholder="Enter Your Email for Latest Update"
                            className="email-input"
                        />
                        <button className="submit-button">Submit</button>
                    </div>
                    <div className="footer-text">
                        <p>2024 © Flahy. All Rights Reserved | Powered By <a rel='noreferrer' target='_blank' href='https://www.flahybase.com'><u>Flahybase.com</u></a></p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default LandingPage;
