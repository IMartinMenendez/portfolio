import './index.css';
import {Header} from "./components/Header";
import React from "react";
import {Card} from "./components/Card";
import Row from "react-bootstrap/Row";
import {NavbarHeader} from "./components/Navbar";
import {AboutMe} from "./components/AboutMe";
import {FinalForm} from "./components/ContactForm";

function App() {
    return (
        <div className="App">
            <NavbarHeader/>
            <Header/>
            <Row>
                <Card/>
                <Card/>
                <Card/>
            </Row>
            <AboutMe/>
            <FinalForm/>
        </div>
    );
}

export default App;
