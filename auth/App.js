import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

//class App extends Component<{}> {
  class App extends Component {
    // handle state of the user loggin if signed in 
    state = { loggedIn: null }
    // null to avoid flickering when you are already logged

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

      // to see if user is loged in
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Card>
          <CardSection>
          <Button 
          style={style.containerStyle} 
          onPress={() => firebase.auth().signOut()}
          >Log out</Button>
          </CardSection>
          </Card>
        );
      case false: 
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
   
  render() {
    return (
      <View>
        <Header headerText="Authentication app" />
       {this.renderContent()}
      </View>
    );
  }
}

const style = {
  containerStyle: {
    flex: 1,
    height: 80
  }
};

export default App;
