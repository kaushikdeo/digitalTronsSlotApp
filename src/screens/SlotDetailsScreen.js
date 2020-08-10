import React, {useState} from 'react'
import { View, Text, TextInput, Alert, KeyboardAvoidingView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { updateSlot } from '../store/actions/slotActions';
import { Input, Button, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

const SlotDetailsScreen = ({route, navigation, updateSlot}) => {
    console.log('ROUTE', route);
    const [firstName, setFirstName] = useState(route.params.slotInfo.item.slotDetails.firstName);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState(route.params.slotInfo.item.slotDetails.lastName);
    const [lastNameError, setLastNameError] = useState('');
    const [contactNumber, setContactNumber] = useState(route.params.slotInfo.item.slotDetails.contact);
    const [contactNumberError, setContactNumberError] = useState('');
    const [imageSources, setImageSources] = useState([]);
    console.log('imageSources', imageSources);

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

    const fireImagePicker = () => {
        let allImages = imageSources;
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              console.log('response.uri', response.uri);
              allImages.push(response.uri);
              console.log('allImages', allImages);
              setImageSources(allImages);
            }
          });
    }

    const renderImages = () => {
        console.log('I am firing', imageSources );
        if (imageSources && imageSources.length) {
            console.log('I am firing inside', imageSources );
            return imageSources.map((imageLink, i) => {
                console.log('I am firing inside inside', imageSources );
                return (
                    <Image key={imageLink} source={imageLink} style={{width: 100, height: 100}} />
                )
            })
        }
        return null;
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{paddingTop: 50, paddingBottom: 150, justifyContent: 'flex-end'}}>
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
                <View style={styles.fullButtonStyle}>
                    <Button
                        onPress={fireImagePicker}
                        title="Open Gallery"
                        raised
                    />
                </View>
                <View>
                    {renderImages()}
                </View>
            </View>
            </TouchableWithoutFeedback>
            </SafeAreaView>
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
        marginTop: 20,
        width: '40%',
        height: 40
    },
    fullButtonStyle: {
        marginTop: 60,
        padding: 20,
    }
})
