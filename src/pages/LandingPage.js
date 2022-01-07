import React from 'react';
import { Card, Stack, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './LandingPage.css';
import { QuestionCircle } from 'react-bootstrap-icons';
import NeonImage from '../components/NeonImage';
import NeonButton from '../components/NeonButton'; // don't use {} when importing class components!!!
import StartGameButton from '../assets/start-game.png';
import JoinGameButton from '../assets/join-game.png';
import TeacupImage from '../assets/teacup-rotated.png';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col>LYN</Col>
                    <Col><div style={{textAlign: "right"}}>?</div></Col>
                </Row>
                <Row style={{ paddingTop: "30px" }}>
                    <Col>
                        <NeonImage style={{width: "100%"}} image={TeacupImage} />
                    </Col>
                </Row>
                <Row>
                    [TEA STIRRER]
                </Row>
                <Row style={{ marginTop: "-10px" }}>
                    <Col>
                        <Stack gap={0}>
                            <NeonImage width="100%" image={StartGameButton} />
                            <NeonImage style={{width:"91%", marginLeft:"10px", marginTop:"-30px"}} image={JoinGameButton} />
                        </Stack>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default LandingPage;