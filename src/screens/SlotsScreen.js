import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchSlots } from '../store/actions/slotActions';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

class SlotsScreen extends Component {
    componentDidMount() {
        this.props.fetchSlots();
    }

    render() {
        const {slotsData, navigation} = this.props;
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
                            return (
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Slot', {slotInfo: item, slotIndex: index})}
                                >
                                    <Text>{item.item.slotTimeString}</Text>
                                </TouchableOpacity>
                            )
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
