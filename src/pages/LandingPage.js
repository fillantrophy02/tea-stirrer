import React from 'react';
import { Card, Stack, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './LandingPage.css';
import { QuestionCircle } from 'react-bootstrap-icons';
import NeonImage from '../components/NeonImage';
import NeonButton from '../components/NeonButton'; // don't use {} when importing class components!!!
import StartGameButton from '../assets/start-game.png';
import JoinGameButton from '../assets/join-game.png';
import TeacupImage from '../assets/teacup-rotated.png';
import QuestionMarkIcon from '../assets/question-mark.png';
import ProfileIcon from '../assets/profile.png';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col><NeonImage style={{
                        width: "150%",
                        marginLeft: "-60px",
                        marginTop: "-30px"
                    }} image={ProfileIcon} /></Col>
                    <Col><NeonImage style={{
                        width: "150%",
                        marginLeft: "25px",
                        marginTop: "-30px"
                    }} image={QuestionMarkIcon} /></Col>
                </Row>
                <Row style={{ paddingTop: "30px" }}>
                    <Col>
                        <NeonImage style={{
                            width: "170%",
                            marginLeft: "-55px"
                        }} image={TeacupImage} />
                    </Col>
                </Row>
                <Row>
                    [TEA STIRRER]
                </Row>
                <Row style={{ marginTop: "-10px" }}>
                    <Col>
                        <Stack gap={0}>
                            <a href="./WaitingPage.js">
                            <NeonImage style={{
                                width: "170%",
                                marginLeft: "-52px"
                            }} image={StartGameButton} />
                            </a>
                            <a href="./WaitingPage.js">
                            <NeonImage style={{
                                width:"155%", 
                                marginLeft:"-45px", 
                                marginTop:"-30px"
                            }} image={JoinGameButton} />
                            </a>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default LandingPage;
