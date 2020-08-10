/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import store from './src/store';

import {
  StyleSheet,
} from 'react-native';

import SlotNavigation from './src/navigations/slotNavigation';

const App = () => {
  return (
    <Provider store={store}>
        <ThemeProvider>
            <NavigationContainer>
                <SlotNavigation />
            </NavigationContainer>
        </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
