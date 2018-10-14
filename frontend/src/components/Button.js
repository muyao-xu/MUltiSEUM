import React, { Component } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class Button extends Component {
  //const { textStyle, buttonStyle } = styles;
  // simplefunction = () => {
  //   console.log('simple function');
  // };
  handleClick = () => {
    Alert('Button clicked!');
  };
  // ImagePicker.showImagePicker = (options, response) => {
  //   console.log('Response = ', response);
  //
  //   if (response.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (response.error) {
  //     console.log('ImagePicker Error: ', response.error);
  //   } else if (response.customButton) {
  //     console.log('User tapped custom button: ', response.customButton);
  //   } else {
  //     const source = { uri: response.uri };
  //
  //     // You can also display the image using data:
  //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  //
  //     this.setState({
  //       avatarSource: source,
  //     });
  //   }
  // };
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={this.handleClick}>
        <Text style={styles.textStyle}>
          Test!!!
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
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
    width: 100,
    //justifyContent: 'center',
    alignSelf: 'center',
    backroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 200
  }
};

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
//export default Button;
