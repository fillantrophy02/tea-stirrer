import React from 'react';
import { ListGroup, Card, Stack, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import './WaitingPage.css';
import { QuestionCircle } from 'react-bootstrap-icons';
import NeonButton from '../components/NeonButton'; // don't use {} when importing class components!!!
import TeapotImage from '../assets/placeholder-teapot.png';

class WaitingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>[Logo]</Col>
                </Row>
                <Row style={{ paddingTop: "3rem"}}>
                    <Col>
                        <Card style={{ margin: "auto", width: "16rem", border: "none"}}>
                        <Stack direction="horizontal" gap={0}>
                            <Form.Control className="game-code" placeholder="2" />
                            <Form.Control className="game-code" placeholder="4" />
                            <Form.Control className="game-code" placeholder="6" />
                            <Form.Control className="game-code" placeholder="1" />
                        </Stack>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "3rem" }}>
                    <Col>
                        <Card style={{ margin: "auto", width: "80%", height: "250px"}}>
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">tyson1222</ListGroup.Item>
                                <ListGroup.Item as="li">stichisthebest</ListGroup.Item>
                                <ListGroup.Item as="li">memeMeMEME</ListGroup.Item>
                            </ListGroup>
                        </Card>
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