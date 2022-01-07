import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import TeacupImage from '../assets/teacup.png';
import './NeonImage.css';

class NeonImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="chosen-card">
                <Card.Img style={this.props.style} src={this.props.image}></Card.Img>
            </Card>
        )
    }
}

export default NeonImage;