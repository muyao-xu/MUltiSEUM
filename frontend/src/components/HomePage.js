import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StatusBar } from 'react-native';




class HomePage extends React.Component {
  static navigationOptions = {
    //title: 'Welcome',
  };
  constructor(){
    super();
    this.state = {
      bgImage:require('./../images/wallpaper.jpg'),
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={this.state.bgImage}
        style={styles.bg}
      >
      <StatusBar transparent />
     <View style={ styles.container } >
        <Text style={styles.headerStyle}>
          MUltiSEUM
        </Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() =>
          navigate('Language')}
        >
          <Text style={styles.textStyle}>
            Get Started!
          </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}


const styles = {
  bg: {
   flex: 1,
   width: '100%',
   height: '100%'
  },
  headerStyle: {
    fontSize: 50,
    marginTop: 150,
    alignSelf: 'center',
    color: 'white',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 10,
  },
  buttonStyle: {
    //flex: 1,
    height: 50,
    width: 130,
    //justifyContent: 'center',
    alignSelf: 'center',
    backroundColor: 'white',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 300
  }
};

export default HomePage;
