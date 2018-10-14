import React from 'react';
import { View, Text, StyleSheet, Linking, ImageBackground } from 'react-native';
import Button from './Button';

export default class Output extends React.Component {
  constructor(props) {
    console.log('props: ', props);
      super(props);
      this.state = {
        bgImage:require('./../images/wallpaper.jpg'),
      }
  }
  static navigationOptions = {
  };

  render() {
    const { navigate } = this.props.navigation;
    var info = JSON.parse(this.props.navigation.state.params);
    console.log(info);
    return (
      <ImageBackground source={this.state.bgImage}
        style={styles.bg}
      >
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{info.title}</Text>
        <View style={{ paddingVertical: 5 }} />
        <Text style={styles.extractStyle}>{info.extract}</Text>
        <View style={{ paddingVertical: 5 }} />
        <Button style={styles.buttonStyle} onPress={() => Linking.openURL(info.url)}>
          <Text>Learn more!</Text>
        </Button>
      </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  bg: {
   flex: 1,
   width: '100%',
   height: '100%'
  },
  container: {
    paddingTop: 50,
    //backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 30,
    marginTop: 50,
    color: 'white',
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
