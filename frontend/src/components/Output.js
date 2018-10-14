import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import Button from './Button';

export default class Output extends React.Component {
  constructor(props) {
    console.log('props: ', props);
      super(props);
  }
  static navigationOptions = {
  };

  render() {
    const { navigate } = this.props.navigation;
    var info = JSON.parse(this.props.navigation.state.params);
    console.log(info);
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{info.title}</Text>
        <Text style={styles.extractStyle}>{info.extract}</Text>
        <Button style={styles.buttonStyle} onPress={() => Linking.openURL(info.url)}>
          <Text>{info.url}</Text>
        </Button>
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
