'use client'
import { useEffect } from "react";

export default function Fader() {
      //This is used to set the initial body of the page to be a dark grey to avoid FOUC caused by <Parallax> API.
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

    return (
        <></>
    )
}