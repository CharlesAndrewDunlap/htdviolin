import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    try {
        const requestBody = await request.json();
        console.log('here is the requets body: ', requestBody);

        return new NextResponse(JSON.stringify({message: 'Request received'}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(error) {
        console.error('Error processing request:', error);
        return new NextResponse(JSON.stringify({message: 'Error processing request'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}