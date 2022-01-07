import React from 'react';
import { Card, Image, Button, ListGroup } from 'react-bootstrap';
import PlayersName from '../assets/players-name-cropped.png';
import PlayersBar from '../assets/players-bar.png';
import NeonImage from './NeonImage';
import './PlayersList.css';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Button className="neon-button">{ this.props.text }</Button>
            <div>
            <NeonImage style={{
                position: "relative",
                width: "120%",
                marginLeft: "-60px",
                marginBottom: "-25px"
            }} image={PlayersBar} />
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">Leems</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">Velvety</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">stitchIsCuteo</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            <Card className="player-card">
                <Card.Img className="player-image" src={PlayersName}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="player-card-overlay">0_0</Card.Text> 
                </Card.ImgOverlay>
            </Card>
            </div>
        )
    }
}

export default PlayerList;