import React from 'react';
import { Card, Image, Button, ListGroup } from 'react-bootstrap';
import PlayersName from '../assets/players-name-cropped.png';
import PlayersBar from '../assets/players-bar.png';
import NeonImage from './NeonImage';
import './AnswerList.css';

class AnswerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Button className="neon-button">{ this.props.text }</Button>
            <div>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">Sam</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">Mr Low</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">Jiayi</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            </div>
        )
    }
}

export default AnswerList;