import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class Upload extends React.Component {

  state = {
    avatarSource: null,
    videoSource: null
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
        // get the name
        var data = new FormData();
        data.append('filetoupload', {
          // change only the next two linesbv
          uri: source.uri,
          name: 'test.JPG',
          type: 'image/jpg'
        });

        fetch('http://localhost:3000/ImgInfo', {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: 'POST',
          body: data
        })
        .then((response) => {
          var query = response._bodyText;
          // change this
          const language = 'en';
          console.log('query: ', query);
          // get extract
          fetch(`http://localhost:3000/Info/${query}/${language}`)
            .then((response) => {
              var description = response._bodyText;
              console.log(description);
            })
            .catch((error) => {
              console.error(error);
            });
          // Alert.alert(response._bodyText);
        })
        .catch((error) => {
          console.error(error);
        });


      }
    });
  }

  selectOCRTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
        // get the name
        var data = new FormData();
        data.append('filetoupload', {
          // change only the next two linesbv
          uri: source.uri,
          name: 'test.JPG',
          type: 'image/jpg'
        });

        fetch('http://localhost:3000/OCRText', {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: 'POST',
          body: data
        })
        .then((response) => {
          var query = response._bodyText;
          // change this
          const language = 'en';
          console.log('query: ', query);
          // get extract
          fetch(`http://localhost:3000/Info/${query}/${language}`)
            .then((response) => {
              var description = response._bodyText;
              console.log(description);
            })
            .catch((error) => {
              console.error(error);
            });
          // Alert.alert(response._bodyText);
        })
        .catch((error) => {
          console.error(error);
        });


      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectOCRTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        { this.state.videoSource &&
          <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
