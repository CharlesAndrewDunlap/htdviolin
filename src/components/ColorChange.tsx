'use client';

import React, { useEffect } from 'react';

export default function ColorChange() {
    useEffect(() => {
        const originalBackgroundColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = 'black';

        return () => {
            document.body.style.backgroundColor = originalBackgroundColor;
        }
    }, []);

    return <></>
}