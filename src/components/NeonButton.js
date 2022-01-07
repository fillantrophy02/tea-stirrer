import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import ButtonImage from '../assets/button.png';
import './NeonButton.css';

class NeonButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Button className="neon-button">{ this.props.text }</Button>
            <Card className="chosen-card">
                <Card.Img className="chosen-image" src={ButtonImage}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="chosen-card-overlay">
                        {this.props.text}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default NeonButton;