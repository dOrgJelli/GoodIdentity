import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import logo from './logo.png';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    console.log("users")
    fetch('/users').then(res => res.json())
    .then(users => this.setState({ users }))
      
  } 


  render() {


    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Create React Native Web App</Text>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        {Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}
        <TouchableHighlight
          onPress={this.onClick}
          style={styles.button}
          underlayColor={'#0A84D0'}
        >
          <Text style={styles.buttonText}>Rotate Logo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
