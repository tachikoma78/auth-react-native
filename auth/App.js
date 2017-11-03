import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

//class App extends Component<{}> {
  class App extends Component {
    // the best to call firebase is before rendering
    // in a lifecycle method
    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBaLU4hblpW0b4UA4Kdg6C29gEv_DOqrSM',
        authDomain: 'auth-react-dc35d.firebaseapp.com',
        databaseURL: 'https://auth-react-dc35d.firebaseio.com',
        projectId: 'auth-react-dc35d',
        storageBucket: 'auth-react-dc35d.appspot.com',
        messagingSenderId: '902630849355'
      });
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication app" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
