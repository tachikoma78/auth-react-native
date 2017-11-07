import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    
    // we try to authenficate user
    // if it fails we try to create account with the credentials
    // else fail
    onButtonPress() {
        const { email, password } = this.state;

        //reset state if attempts were previously done
        this.setState({ 
            error: '',
            loading: true             
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this)) // no parantheses and bind for future usage
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) // no parantheses and bind for future usage
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentification failed',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        } 
        return (
        <Button onPress={this.onButtonPress.bind(this)} /*biind button to call it in the future */> 
        Log in
        </Button>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder='user@mail.com'
                        label='Username'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input  
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}                    
                </Text>
                
                <CardSection>
                    {this.renderButtonOrSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
