import React from "react";
import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";
import './Card.css';

export const Card = props => {
    return (
        <BootstrapCard className="card-row" style={{width: '25rem'}}>
            <BootstrapCard.Img variant="top"
                               src="https://cdn.pixabay.com/photo/2021/01/27/06/55/nova-scotia-duck-tolling-retriever-5953889_1280.jpg"/>
            <BootstrapCard.Body>
                <BootstrapCard.Title>BootstrapCard Title</BootstrapCard.Title>
                <BootstrapCard.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </BootstrapCard.Text>
                <Button variant="primary">Take me there</Button>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}
