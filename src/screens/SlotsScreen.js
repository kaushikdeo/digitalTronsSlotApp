import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchSlots } from '../store/actions/slotActions';

class SlotsScreen extends Component {
    componentDidMount() {
        this.props.fetchSlots();
    }

    render() {
        console.log('this.props.slots', this.props.slotsData);
        const {slotsData} = this.props;
        return (
            !slotsData.isLoading ? 
            (
                slotsData.slots && slotsData.slots.length ?
                (
                    <View>
                        <Text>Slots Screen</Text>
                    </View>
                ): 
                (
                    <View>
                        <Text>No Slots Data</Text>
                    </View>
                )
            ) : <ActivityIndicator size="large" />
        );
    }
}

const mapStateToProps = state => ({
    slotsData: state.slots,
})

export default connect(mapStateToProps, { fetchSlots })(SlotsScreen);
