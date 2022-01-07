import React from 'react';
import './FlashingPageChosen.css';
import FlashingPage from '../components/FlashingPage';
import { unmountComponentAtNode } from 'react-dom';
import { Card } from 'react-bootstrap';

class FlashingPageChosen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <FlashingPage />
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
            page:             
                <Card className="chosen-page">
                    YOU have been chosen
                </Card>
        })
    }

    render() {
        return (
            <div>{this.state.page}</div>
        )
    }
}

export default FlashingPageChosen;