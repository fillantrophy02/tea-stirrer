import React from 'react';
import { Card, Stack, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './LandingPage.css';
import { QuestionCircle } from 'react-bootstrap-icons';
import NeonButton from '../components/NeonButton'; // don't use {} when importing class components!!!
import TeapotImage from '../assets/placeholder-teapot.png';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chosen-background">
            <Container>
                <Row>
                    <Col>Hi, L</Col>
                    <Col xs={2}> 
                        <Button className="question-button">
                            <QuestionCircle size={15}/>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={TeapotImage} alt="[image.png]" />
                    </Col>
                </Row>
                <Row className="bottom-row">
                    <Col>
                        <Stack gap={2}>
                            <NeonButton text="JOIN GAME"/>
                            <NeonButton text="START A NEW GAME"/>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default LandingPage;