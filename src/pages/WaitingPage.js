import React from 'react';
import { ListGroup, Card, Stack, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import './WaitingPage.css';
import NeonButton from '../components/NeonButton';
import NeonImage from '../components/NeonImage';
import TeacupImage from '../assets/teacup-rotated.png';
import PlayersBar from '../assets/players-bar.png';
import PlayersName from '../assets/players-name.png';
import PlayersList from '../components/PlayersList';

class WaitingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row style={{ paddingTop: "15px"}}>
                    <Col>
                        <NeonImage style={{width: "100%", margin:"auto"}} image={TeacupImage}/>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "20px"}}>
                    <Col>
                        <Card style={{ marginLeft: "37px", width: "60%", border: "none", backgroundColor: "rgba(0,0,0,0)"}}>
                        <Stack direction="horizontal" gap={0}>
                            <Form.Control className="game-code" placeholder="2" />
                            <Form.Control className="game-code" placeholder="4" />
                            <Form.Control className="game-code" placeholder="6" />
                            <Form.Control className="game-code" placeholder="1" />
                        </Stack>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                    <Col>
                        <PlayersList />
                    </Col>
                </Row>
                <Row className="bottom-row">
                    <Col>
                        <Stack gap={1}>
                            <NeonButton text="START GAME"/>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WaitingPage;