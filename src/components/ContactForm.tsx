'use client'

import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useRef } from 'react';
import { verifyCaptcha } from '@/app/ServerActions';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sentMessage, setSentMessage] = useState(false);
    const [animationType, setAnimationType] = useState('enter');
    const [submitText, setSubmitText] = useState('Submit');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const button = e.currentTarget.querySelector('#submit-button');
        const sentData: Response = await fetch('/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (sentData.status === 200) {
            displaySuccess(button);
        } 
    }

    async function handleCaptchaSubmission(token: string | null) {
        //Server function to verify captcha
        try {
            await verifyCaptcha(token)
            setIsVerified(true);
        }
        catch(error) {
            setIsVerified(false);
        }
    }

    function displaySuccess(button) {
        setSentMessage(true);
        //Setting the animationType decouples the element from the slideUp animation set during the below setTimeout.
        setAnimationType('enter');
        setSubmitText('Message Sent');
        button.classList.add('submit-button-success');

        setTimeout(() => {
            //This reassigns the element's animation property from slideDown to slideUp.
            setAnimationType('exit');
            setSubmitText('Submit');
            button.classList.remove('submit-button-success');
            setTimeout(() => setSentMessage(false), 500);
        }, 2000);
    }

    return (
        <div>
            {sentMessage && <div className={`confirmation-message ${animationType}`}>Message Sent</div>}
            <div>
            <h2 className='title' id='contact-title'>Contact Me</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <input className='form-item' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className='form-item' type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className='form-item' type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                <textarea className='form-item' id='form-message' placeholder='Message. . .' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <ReCAPTCHA className='captcha' type='image' sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} ref={recaptchaRef} onChange={handleCaptchaSubmission}/>
                <button className='form-item' id='submit-button' type='submit' disabled={!isVerified}>{submitText}</button>
            </form>
            </div>
        </div>
    )
}