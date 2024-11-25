import React, { useRef, useState } from 'react'; // <-- Make sure to import useState here
import '../styles/LandingPage.css';
import HomeEffect from './HomeEffect';

const LandingPage = () => {
    const emailSectionRef = useRef();
    const emailRef = useRef(null);
    const [email, setEmail] = useState(""); // Track email input
    const [loading, setLoading] = useState(false); // Track submission state
    const [error, setError] = useState(""); // Track error message
    const [success, setSuccess] = useState(""); // Track success message
    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleRegisterClick = () => {
        if (emailRef.current) {
            emailRef.current.scrollIntoView({ behavior: "smooth" });
            emailRef.current.focus();
        }
        if (emailSectionRef.current) {
            emailSectionRef.current.classList.add("focussed");
        }
    };

    const handleSubmit = async () => {
        setError(""); // Clear any previous error
        setSuccess(""); // Clear any previous success

        // Validate email format
        if (!email || !emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }


        setLoading(true);

        try {
            const response = await fetch("https://api-flahyrecovery.lusites.xyz/show-interest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }), // Sending email as JSON payload
            });

            if (response.ok) {
                setSuccess("We will contact you soon!");
                setEmail(""); // Clear the input after successful submission
            } else {
                const errorData = await response.json();
                setError(errorData.message || "There was an issue. Please try again.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

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
                            <div className="product-box">
                                <img src="/productImage.svg" alt="FlahyRecovery Product" />
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
                            type="email"
                            placeholder="Enter Your Email for Latest Update"
                            className="email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state on change
                        />
                        <button
                            className="submit-button"
                            onClick={handleSubmit}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    <div className='alert-message'>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}
                    </div>
                    <div className="footer-text">
                        <p>© 2024 © Flahy. All Rights Reserved | Powered By <a rel='noreferrer' target='_blank' href='https://www.flahybase.com'><u>Flahybase.com</u></a></p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default LandingPage;
