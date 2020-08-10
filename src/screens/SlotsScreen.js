import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
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
                    <View>
                        <FlatList
                            data={slotsData.slots}
                            keyExtractor={(slot, i) => i}
                            renderItem={(item, index) => {
                                console.log('item', item.item.slotDetails.firstName);
                                return (
                                    <TouchableOpacity
                                        style={[styles.card, {backgroundColor: item.item.slotDetails.firstName ? '#77b435' : '#3ec3d5'}]}
                                        onPress={() => navigation.navigate('Slot', {slotInfo: item, slotIndex: index})}
                                    >
                                        <Text style={styles.innerTextStyle}>{item.item.slotTimeString}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
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

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: 'white',
        shadowColor: '#2F2F2F',
        shadowOpacity: 0.11,
        shadowOffset: { width: 0, height: 2 },
        margin: 20,
    },
    innerTextStyle: {
        fontSize: 20,
        color: '#4c5354',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
})
