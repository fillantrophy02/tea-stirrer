import React from 'react';
import { Card, Stack, Button, Container, Row, Col, Image } from 'react-bootstrap';
import './responses-load.css';
import Timer from './timer.js'
import TimerBorder from '../assets/timer-frame.png';
import PlayerResponse from '../assets/player-response.png';

class ResponsesLoad extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div> 
                <Container>
                    <row>
                        <col><TimerBorder style={{
                            width: "100%",
                            margin: "25px",
                        }}/>     
                        
                        { Timer }
                        
                        </col>
                        </row>
                        <row>

                        <col> <PlayerResponse style={{
                            width: "100%",
                            margin: "25px",
                        }}/>     
                        <Card.Text>
                          Some quick example 
                        </Card.Text>
                        </col>
                    </row>
                </Container>
            </div>
        )
    }
  }



export default ResponsesLoad
