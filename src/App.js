import './index.css';
import {Header} from "./components/Header";
import React from "react";
import {Card} from "./components/Card";
import Row from "react-bootstrap/Row";
import {NavbarHeader} from "./components/Navbar";
import {AboutMe} from "./components/AboutMe";
import {FinalForm} from "./components/ContactForm";
import imageProject from './components/Projects Pictures/RelaxMe.png'

function App() {
    return (
        <div className="App">
            <NavbarHeader/>
            <Header/>
            <Row>
                <Card title="RelaxMe"
                      description="Daily time to you with relaxing music and stunning background pictures."
                      img={imageProject}
                      website="https://imartinmenendez.github.io/RelaxMe/#"
                      button="Take me there"
                />
                <Card
                    title="Memory Game"
                    description="Funny game to find the same card."
                    img="https://curiousworld-static-files.s3.amazonaws.com/blog/Screenshot%202019-08-22%20at%2010.13.25.png"
                    button="Available soon"
                />
                <Card
                    title="Blog"
                    description="Nice blogs with articles to read."
                    img="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
                    website="https://www.laultimapagina.com/#/"
                    button="Take me there"
                />
            </Row>
            <AboutMe/>
            <FinalForm/>
        </div>
    );
}

export default App;
