'use client'

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }

    return (
        <div className='contact-form'>
            <h2 className='title'>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                <input type='text' placeholder='Message. . .' value={message} onChange={(e) => setMessage(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}