import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-bootstrap';

// Don't use {} when importing class components!!!
import NeonButton from '../components/NeonButton';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NeonButton text="Start"/>
        )
    }
}

export default LandingPage;