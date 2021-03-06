import React from 'react';
import './FlashingPageChosen.css';
import FlashingCard from '../components/FlashingCard';
import { unmountComponentAtNode } from 'react-dom';
import { Card, Container } from 'react-bootstrap';
import NeonButton from '../components/NeonButton';
import NeonImage from '../components/NeonImage';
import ChosenImage from '../assets/chosen-one-target.png';

const ChosenPage = 
    <Container>
        <div className="chosen-background">
            <NeonImage style={{
                paddingTop: "80px",
                marginLeft: "-60px",
                width: "280px",
            }} image={ChosenImage} />
            <NeonButton 
                cardStyle={{marginTop: "-20px", width: "200px", height: "auto"}}
                textStyle={{marginTop: "-5px", fontFamily: "Papyrus", lineHeight: "1.5rem"}}
                text="YOU ARE THE CHOSEN ONE" />
        </div>
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
