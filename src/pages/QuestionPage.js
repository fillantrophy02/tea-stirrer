import React from 'react';
import { ListGroup, Card, Stack, Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import './WaitingPage.css';
import NeonButton from '../components/NeonButton';
import NeonImage from '../components/NeonImage';
import TeacupImage from '../assets/teacup-rotated.png';
import PlayersBar from '../assets/players-bar.png';
import PlayersName from '../assets/players-name.png';
import PlayersList from '../components/PlayersList';
import QuestionBox from '../components/QuestionBox';
import Question from '../assets/question.png';
import AnswerList from '../components/AnswerList';

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row style={{ paddingTop: "15px"}}>
                    <Col>
                        <QuestionBox />
                    </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                    <Col>
                        <AnswerList />
                    </Col>
                </Row>
                <Row className="bottom-row">
                    <Col>
                        <Stack gap={1}>
                            <NeonButton text="DONE"/>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QuestionPage;