
import React from "react";

function Contact() {
    return (
        <main className="container">

            <section className="card contact-card">

                <p className="subtitle">GET IN TOUCH</p>

                <h2>Contact Me</h2>

                <p className="contact-description">
                    Have a project idea, collaboration opportunity, or just
                    want to say hello? Feel free to reach out.
                </p>

                <div className="contact-info">

                    <div className="contact-item">
                        <span className="contact-label">EMAIL</span>
                        <a href="mailto:medhana@gmail.com">
                            medhana@gmail.com
                        </a>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">PHONE</span>
                        <a href="tel:+919452874530">
                            +91 94528 74530
                        </a>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;

