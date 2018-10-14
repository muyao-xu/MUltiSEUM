import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import {
//   createStackNavigator,
// } from 'react-navigation';


class HomePage extends React.Component {
  static navigationOptions = {
    //title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.headerStyle}>
          MUiltiSEUM
        </Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() =>
<<<<<<< HEAD
          navigate('Language')}>
=======
          navigate('Upload')}
        >
>>>>>>> layout
          <Text style={styles.textStyle}>
            Get Started!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = {
  headerStyle: {
    fontSize: 50,
    marginTop: 150,
    alignSelf: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 10
  },
  buttonStyle: {
    //flex: 1,
    height: 50,
    width: 130,
    //justifyContent: 'center',
    alignSelf: 'center',
    backroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 300
  }
};

export default HomePage;
