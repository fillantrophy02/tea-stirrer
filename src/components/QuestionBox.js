import React from 'react';
import { Card, Image, Button, ListGroup, Container } from 'react-bootstrap';
import PlayersName from '../assets/players-name-cropped.png';
import PlayersBar from '../assets/players-bar.png';
import NeonImage from './NeonImage';
import Question from '../assets/question.png'
import './QuestionBox.css';

class QuestionBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="question-card">
                <Card.Img className="question-image" src={Question}></Card.Img>
                <Card.ImgOverlay>
                    <Card.Text className="question-card-overlay">
                    Do I really like ____?
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}

export default QuestionBox;