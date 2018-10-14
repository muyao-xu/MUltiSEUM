import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default class Output extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Hello!</Text>
        <Text style={styles.extractStyle}>some information here</Text>
        <Button style={styles.buttonStyle}>Learn more</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    //backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 30,
    marginTop: 50,
  },
  buttonStyle: {
    //flex: 1,
    height: 50,
    width: 100,
    //justifyContent: 'center',
    alignSelf: 'center',
    //backroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 300
  }

});
