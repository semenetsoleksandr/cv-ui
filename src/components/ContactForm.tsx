

export const ContactForm = () => {
    return (
        <form><h1>ContactForm</h1>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email"/>
            <label>Your message</label>
            <textarea placeholder="Enter your message"></textarea>
            <button type="submit">Send message</button>
        </form>
    )
}