import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import NeonButtonImage from '../assets/placeholder-neon-button.jpg';
import './NeonButton.css';

class NeonButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Card className="neon-button">
            //     <Card.ImgOverlay>
            //         <Card.Text>{ this.props.text }</Card.Text>
            //     </Card.ImgOverlay>
            // </Card>
            <Button className="neon-button">{ this.props.text }</Button>
        )
    }
}

export default NeonButton;