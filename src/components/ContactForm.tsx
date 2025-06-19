export const ContactForm = () => {
    return (
        <section>
            <form className="contact">
                <h1>ContactForm</h1>
                <div className="input-box">
                <label>Your Name</label>
                <input type="text" className="field" placeholder="Enter your name"/>
                </div>
                <div className="input-box">
                <label>Your Email</label>
                <input type="email" className="field" placeholder="Enter your email"/>
                </div>
                <div className="input-box">
                <label>Your message</label>
                <textarea className="field mes" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}