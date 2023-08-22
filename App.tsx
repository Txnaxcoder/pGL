import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import LoginPage from './LoginPage';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import EventTabs from './EventTabs';
import EventDetailsScreen from './EventDetailsScreen';
import Paymentpage from './Paymentpage';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  EventDetails: { event: any };
  Paymentpage: undefined;
  PastEventsScreen: undefined;
  OngoingEvents: undefined;
  FutureEventsScreen: undefined;
};

// Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkryPummY3a_Qi-YR4dV-VGUV8EZvJjFw",
  authDomain: "quiz-8558b.firebaseapp.com",
  databaseURL: "https://quiz-8558b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-8558b",
  storageBucket: "quiz-8558b.appspot.com",
  messagingSenderId: "803148155342",
  appId: "1:803148155342:web:7a14a22b97dd588f8c839f",
  measurementId: "G-0GW1MMVKSR"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={EventTabs} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} /> 
        <Stack.Screen name="Paymentpage" component={Paymentpage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
