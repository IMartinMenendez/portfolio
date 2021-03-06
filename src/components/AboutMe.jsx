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

function passwd() {

    var password = prompt('Enter the password to download the file:');
    if (password === Password) {
        window.open(Cv);
    } else {
        alert("incorrect password!! please try again");
    }
}

export function AboutMe() {
    return (
        <div>
            <Row>
                <Image id='aboutMe' className="picture" src={aboutMeImg} roundedCircle/>
                <div className="AboutMe">
                    <h2 className="textAboutMe">About Me.</h2>
                    <h3>I am Irene Martín.</h3>
                    <p>After 4 years working in Finance across marketing and publishing sectors, I am ready for my next
                        challenge: Becoming a Web Developer.</p>
                    <p> Before moving into Software Development, I worked in Accountancy where I was responsible to
                        maintain the Management Accounts and posting journals to the correct ledger. I have developed
                        attention to detail, critical thinking and other really useful skills for this
                        new pivot in my life.</p>
                    <p>To get the knowledge, I have completed:</p>
                    <p>A Web development Bootcamp with Udemy where I learnt all I needed to
                        become a Full Stack Web Developer, as it taught me to build complex web application using:
                        <b> HTML, CSS, Bootstrap, JavaScript, jQuery, DOM, Node.js, APIs, Git and GitHub, EJS, SQL,
                            MongoDB,
                            Mongoose and React.js.</b>
                    </p>
                    <p>The Pre-Work Tech Digital Reskilling Bootcamp with Ironhack through a Santander
                        Scholarship, selected from the best candidates in an attitude test, where I
                        learnt <b>Java</b> and strengthen my knowledge on <b>CSS, JavaScript, HTML and SQL.</b> </p>

                        <p>After finishing the Pre-Work, I was also selected as part as the 25 best candidates to continue with the scholarship and
                        complete Bootcamp Web Development, where I learnt <b>Programming Fundamentals,
                        Foundational Java and Testing, SQL and JPA, MicroServices Architecture and Distributed Systems,
                        TypeScript and Angular Fundamentals and more.</b></p>
                    <div>
                        <a href="https://github.com/IMartinMenendez"><img className="icon" src={iconGithub} alt="Icon"/></a>
                        <a href="https://www.instagram.com/irene_mmenendez/"><img className="icon" src={iconInstagram}
                                                                                  alt="Icon"/></a>
                        <a href="https://www.linkedin.com/in/irene1martin2menendez/"><img className="icon"
                                                                                          src={iconLinkedin}
                                                                                          alt="Icon"/></a>
                    </div>
                    <form method="get">
                        <Button type="submit" variant="outline-primary" onClick={passwd}>Download my CV</Button>
                    </form>
                </div>
            </Row>
        </div>
    );
}