import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (storageKey, value) => {
    try {
    console.log('storeData getting called');
      const jsonValue = JSON.stringify(value);
      console.log('JSON VALUE', jsonValue);
      const storedData = await AsyncStorage.setItem(storageKey, jsonValue);
      console.log('storeData', storedData);
      console.log('storeData ASYNC', AsyncStorage.getItem('slots'));
    } catch (e) {
      console.log('storage Error', e);
    }
}

export const getData = async storageKey => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      return null
    }
  }