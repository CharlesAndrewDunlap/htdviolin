import { NextRequest, NextResponse } from "next/server";
require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST (request: NextRequest) {
    try {
        const requestBody = await request.json();
        const msg: {[key: string]: string} = {
            to: process.env.EMAIL!,
            from: process.env.VERIFIED_SENDER!,
            subject: requestBody.subject,
            text: `You've got mail! This one's from ${requestBody.name} who can be reached at ${requestBody.email}. \n
            \n
            ${requestBody.message}`
        }

        await sgMail.send(msg);
        
        return new NextResponse(JSON.stringify({message: 'Request received'}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(error) {
        console.error('There was an error sending the e-mail.');
        return new NextResponse(JSON.stringify({message: 'Error processing request'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}