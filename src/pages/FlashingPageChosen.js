import React from 'react';
import './FlashingPageChosen.css';
import FlashingCard from '../components/FlashingCard';
import { unmountComponentAtNode } from 'react-dom';
import { Card, Container } from 'react-bootstrap';
import NeonButton from '../components/NeonButton';

const ChosenPage = 
    <Container>
        <div className="chosen-background">
            <div style={{color: "white"}}>[Logo.png]</div>
            <NeonButton text="YOU ARE THE CHOSEN ONE" />
        </div>;
    </Container>

class FlashingPageChosen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <FlashingCard />
        };
        this.endFlashing = this.endFlashing.bind(this);
    }   

    componentDidMount() {
        setTimeout(
            () => this.endFlashing(),
            3000
        );
    }

    endFlashing() {
        this.setState({
            page: ChosenPage
        })
    }

    render() {
        return (
            <div>{this.state.page}</div>
        )
    }
}

export default FlashingPageChosen; 
