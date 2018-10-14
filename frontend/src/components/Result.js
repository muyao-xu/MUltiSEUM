import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class HomePage extends React.Component {
  constructor(props) {
      super(props);
  }
  static navigationOptions = {
    //title: 'Welcome',
  };
  // var info = this.props.navigation.getParam('information', 'There is no information in our database right now');
  // console.log(info);

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.headerStyle}>
          Result Page
        </Text>
      
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
