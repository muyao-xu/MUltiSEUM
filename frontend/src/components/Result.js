import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class HomePage extends React.Component {
  constructor(props) {
    console.log('props: ', props);
      super(props);
  }
  static navigationOptions = {
    //title: 'Welcome',
  };
  // var title = this.props.navigation.state.title;
  // console.log(title);

  render() {
    const { navigate } = this.props.navigation;
    var info = JSON.parse(this.props.navigation.state.params);
    console.log(info);
    return (
      <View>
        <Text style={styles.headerStyle}>
          Result Page
        </Text>

        <Text>
          {info.title}
        </Text>

        <Text>
        {info.extract}
        </Text>
        <Text>
        {info.url}
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
