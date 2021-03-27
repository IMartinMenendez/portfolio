import React from "react";
import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";
import './Card.css';

export const Card = props => {
    return (
        <BootstrapCard id="portfolio" className="card-row" style={{width: '25rem'}}>
            <BootstrapCard.Img variant="top"
                               src={props.img}/>
            <BootstrapCard.Body>
                <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    {props.description}
                </BootstrapCard.Text>
                <Button variant="outline-primary" href={props.website}>{props.button}</Button>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}
