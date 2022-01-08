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
import {Link} from 'react-router-dom';
import GameTitleImage from '../assets/game-title.png'

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
                <Row style={{ paddingTop: "0px"}}>
                    <Col>
                        {/* <div style={{marginLeft: "22px"}}className="game-name">
                        TEA STIRRER
                        </div> */}
                        <NeonImage style={{
                                width: "200%",
                                marginLeft: "-75px"
                            }}image={GameTitleImage} />
                    </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                    <Col>
                        <Stack gap={0}>
                            <Link to="/waiting-page">
                            <NeonImage style={{
                                marginTop: "-30px",
                                width: "150%",
                                marginLeft: "-40px"
                            }} image={StartGameButton} />
                            </Link>
                            <Link to="/waiting-page">
                            <NeonImage style={{
                                width:"137%", 
                                marginLeft:"-32px", 
                                marginTop:"-40px"
                            }} image={JoinGameButton} />
                            </Link>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default LandingPage;
// yeet
