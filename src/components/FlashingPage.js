import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

const colors = ["#fcb040", "#ee2b7b", "#09a1b7"];

class FlashingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageColor: colors[0]
        };
        this.flash = this.flash.bind(this);
    }

    componentDidMount() {
        this.colorID = setInterval(
            () => this.flash(),
            500
        )
    }

    componentWillUnmount() {
        clearInterval(this.colorID);
    }

    flash() {
        let choices = colors.filter((value) => {return value != this.state.pageColor})
        this.setState({
            pageColor: choices[Math.floor(Math.random()*choices.length)]
        })
    }

    render() {
        return (
            <Card style={{ 
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                backgroundColor: this.state.pageColor
            }}></Card>
        )
    }
}

export default FlashingPage;