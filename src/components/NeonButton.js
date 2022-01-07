import React from 'react';
import { Card, Image } from 'react-bootstrap';
import NeonButtonImage from '../assets/placeholder-neon-button.jpg';
import './NeonButton.css';

class NeonButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="neon-button">
                <Card.Img src="./assets/placeholder-neon-button.jpg" alt="[image.jpg]" />
                <Card.Img as={Image} src={NeonButtonImage} fluid={true} alt="[image.jpg]" /> 
                <Card.ImgOverlay>
                    <Card.Text>[Start]</Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default NeonButton;