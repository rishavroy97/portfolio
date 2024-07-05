"use client";

import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const br = `%0D%0A`;
        const body = `
            You got a new message from: ${br}${br}
            Name: ${name}${br}
            Email: ${email}${br}${br}

            Message: ${br}
            ${message}${br}${br}

            Regards,${br}
            Portfolio Connect
        `;
        window.open(`mailto:rr4577@nyu.edu?subject=${subject}&body=${body}`);
    };

    return (
        <form className="form-control flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" className="grow" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required={true} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="email" className="grow" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required={true} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                <input type="text" className="grow" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} required={true} />
            </label>
            <textarea placeholder="Type your message here..." className="textarea textarea-bordered textarea-lg text-sm min-h-40" value={message} onChange={e => setMessage(e.target.value)}>
            </textarea>
            <button type="submit" role="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default ContactForm
