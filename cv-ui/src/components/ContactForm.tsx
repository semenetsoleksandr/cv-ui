import React from "react";

interface ContactFormProp {
    email?: string;
    text?: string;
}

export const ContactForm: React.FC<ContactFormProp> = () => {
    return (
        <section>
            <form className="contact"><h2>Feedback form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter your name"/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email adress"/>
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea id="" className="field message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}

