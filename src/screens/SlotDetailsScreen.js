import React, {useState} from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { updateSlot } from '../store/actions/slotActions';
import { Input, Button } from 'react-native-elements';

const SlotDetailsScreen = ({route, navigation, updateSlot}) => {
    console.log('ROUTE', route);
    const [firstName, setFirstName] = useState(route.params.slotInfo.item.slotDetails.firstName);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState(route.params.slotInfo.item.slotDetails.lastName);
    const [lastNameError, setLastNameError] = useState('');
    const [contactNumber, setContactNumber] = useState(route.params.slotInfo.item.slotDetails.contact);
    const [contactNumberError, setContactNumberError] = useState('');

    const handleSubmit = () => {
        setFirstNameError('');
        setLastNameError('');
        setContactNumberError('');
        if (!firstName || !lastName || !contactNumber) {
            if (!firstName) setFirstNameError('Enter Your First Name To Continue')
            if (!lastName) setLastNameError('Enter Your First Name To Continue');
            if (!contactNumber) setContactNumberError('Enter Your First Name To Continue');
        } else {
            updateSlot({slotData: {firstName, lastName, contactNumber }, slotIndex: route.params.slotInfo.index});
            Alert.alert('Details Added Successfully');
            navigation.goBack();
        }
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <View style={{paddingTop: 50}}>
                <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 20}}>Enter Slot Details for {route.params.slotInfo.item.slotTimeString}</Text>
                <Input
                    label='First Name'
                    value={firstName}
                    onChangeText={text => setFirstName(text.trim())}
                    placeholder='John'
                    errorStyle={{ color: 'red' }}
                    errorMessage={firstNameError}
                />
                <Input
                    label='Last Name'
                    value={lastName}
                    onChangeText={text => setLastName(text.trim())}
                    placeholder='Doe'
                    errorStyle={{ color: 'red' }}
                    errorMessage={lastNameError}
                />
                <Input
                    label='Contact Number'
                    value={contactNumber}
                    onChangeText={text => setContactNumber(text.trim())}
                    placeholder='+91 9999999999'
                    errorStyle={{ color: 'red' }}
                    errorMessage={contactNumberError}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button
                            onPress={handleSubmit}
                            title="Save Details"
                            raised
                        />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            onPress={() => {
                                navigation.goBack();
                            }}
                            title="Cancel"
                            raised
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default connect(null, { updateSlot })(SlotDetailsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        width: '40%',
        height: 40
    }
})
