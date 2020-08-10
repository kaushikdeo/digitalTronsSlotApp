import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchSlots } from '../store/actions/slotActions';
import { FlatList } from 'react-native-gesture-handler';

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
                    <FlatList
                        data={slotsData.slots}
                        keyExtractor={(slot, i) => i}
                        renderItem={(item, index) => {
                            console.log('item', item.item.slotTimeString);
                            return (<View><Text>{item.item.slotTimeString}</Text></View>)
                        }}
                    />
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
