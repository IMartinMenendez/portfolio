import './Header.css';
import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="banner">
                    <TypeWriterEffect className="animation"
                                      textStyle={{fontFamily: 'Montserrat',}}
                                      startDelay={100}
                                      cursorColor="white"
                                      text="Irene Martin. Web Developer."
                                      typeSpeed={100}
                    />
                    <p className="pHeader">Creation without Limits.</p>
                </div>
            </div>
        </header>
    );
}