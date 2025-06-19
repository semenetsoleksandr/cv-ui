import React, {type ChangeEvent, type FormEvent, useState} from "react";

type FormData = {
    username: string;
    email: string;
    message: string
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert('Your message has been sent!');
                setFormData({username: '', email: '', message: ''});
            } else {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
        if (loading) {
            return <p>Loading message…</p>;
        }
        if (error) {
            return <p>Error loading skills: {error}</p>;
        }
    }

    return (
        <section>
            <form className="contact" onSubmit={handleSubmit}>
                <h1>ContactForm</h1>
                <div className="input-box">
                    <label>Your Name</label>
                    <input type="text" className="field" name="username" value={formData.username}
                           onChange={handleChange}
                           placeholder="Enter your name" required/>
                </div>
                <div className="input-box">
                    <label>Your Email</label>
                    <input type="email" className="field" name="email" value={formData.email} onChange={handleChange}
                           placeholder="Enter your email" required/>
                </div>
                <div className="input-box">
                    <label>Your message</label>
                    <textarea className="field mes" name="message" value={formData.message} onChange={handleChange}
                              placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}

export default ContactForm;