'use client'

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        await fetch('/contact', {
            method: 'POST',
            
        })
    }

    return (
        <div>
            <h2 className='title' id='contact-title'>Contact Me</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <input className='form-item' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className='form-item' type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='form-item' type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                <textarea className='form-item' id='form-message' placeholder='Message. . .' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className='form-item' type='submit'>Submit</button>
            </form>
        </div>
    )
}