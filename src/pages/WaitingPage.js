import React from 'react';
import { Card, Stack, Button, Container, Row, Col, Image } from 'react-bootstrap';
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
                <Row>
                    <Col></Col>
                </Row>
                <Row className="bottom-row">
                    <Col>
                        <Stack gap={2}>
                            <NeonButton text="JOIN GAME"/>
                            <NeonButton text="START GAME"/>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WaitingPage;