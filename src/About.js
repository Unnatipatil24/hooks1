import React from 'react'
import { useLocation } from "react-router-dom";

const About = () => {
    const location=useLocation();
  return (
    <div>
      <h1>Hello {location.pathname.replace("/",'')} page</h1>
      {
        location.pathname ==='/About/unnati' ?
        <p>Hii, Unnati good to see you again</p>:
        <p>Login to see your files</p>
      }
    </div>
  )
}

export default About
