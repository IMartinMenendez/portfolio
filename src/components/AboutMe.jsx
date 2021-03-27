import React from "react";
import Image from "react-bootstrap/Image";
import aboutMeImg from './Pictures/AboutMe.jpg';
import iconGithub from './Icons/github.png';
import iconInstagram from './Icons/instagram.png';
import iconLinkedin from './Icons/linkedin.png';
import './AboutMe.css';
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Cv from "./Files/CV.pdf";
import Password from "./Password";

function passwd(){

    var password = prompt('Enter the password to download the file:');
    if(password === Password){
        window.open(Cv);
    }else{
        alert("incorrect password!! please try again");
    }
}

export function AboutMe() {
    return (
        <div>
            <Row>
                <Image id='aboutMe' className="picture" src={aboutMeImg} roundedCircle/>
                <div className="AboutMe">
                    <h2> About Me. </h2>
                    <h3>Web Developer</h3>
                    <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to specimen book.

                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English.</p>
                    <div>
                        <a href="https://github.com/IMartinMenendez"><img className="icon" src={iconGithub} alt="Icon"/></a>
                        <a href="https://www.instagram.com/irene_mmenendez/"><img className="icon" src={iconInstagram} alt="Icon"/></a>
                        <a href="https://www.linkedin.com/in/irene1martin2menendez/"><img className="icon" src={iconLinkedin} alt="Icon"/></a>
                    </div>
                    <form method="get">
                    <Button type="submit" variant="outline-primary" onClick={passwd}>Download my CV</Button>
                    </form>
                </div>
            </Row>
        </div>
    );
}