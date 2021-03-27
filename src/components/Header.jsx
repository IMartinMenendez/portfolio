import './Header.css';
import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import logo from './Logos/8.png';


export function Header() {
    return (
        <header className="header">
            <div className="container">
            <TypeWriterEffect className="animation"
                              textStyle={{fontFamily: 'Montserrat',}}
                              startDelay={100}
                              cursorColor="white"
                              text="Irene Martin. Web Developer."
                              typeSpeed={100}
            />
            <p className="pHeader">Creation without Limits.</p>
        </div>
        </header>
    );
}