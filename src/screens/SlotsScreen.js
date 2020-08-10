import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchSlots } from '../store/actions/slotActions';

class SlotsScreen extends Component {
    componentDidMount() {
        this.props.fetchSlots();
    }

    render() {
        return (
            <View>
                <Text>Slots Screen</Text>
            </View>
        );
    }
}

export default connect(null, { fetchSlots })(SlotsScreen);
