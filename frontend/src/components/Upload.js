import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
//import Language from './src/Language';

export default class Upload extends React.Component {
  static navigationOptions = {
    //title: 'Welcome',
  };
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
          console.log('query: ', query);
          // change this
          fetch('http://localhost:3000/getLanguage')
          .then((response) => {
            console.log('here');
            console.log('response', response);
            var language = response._bodyText;
            // get extract
            fetch(`http://localhost:3000/Info/${query}/${language}`)
              .then((response) => {
                var info = response._bodyText;
                console.log(info);
                this.setState({
                  information: info
                });
              })
              .catch((error) => {
                console.error(error);
              });
          })
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
            videoSource: source
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
            console.log('query: ', query);
            // change this
            fetch('http://localhost:3000/getLanguage')
            .then((response) => {
              console.log('here');
              console.log('response', response);
              var language = response._bodyText;
              // get extract
              fetch(`http://localhost:3000/Info/${query}/${language}`)
                .then((response) => {
                  var info = response._bodyText;
                  console.log(info);
                  this.setState({
                    information: info
                  });
                })
                .catch((error) => {
                  console.error(error);
                });
            })
            // Alert.alert(response._bodyText);
          })
          .catch((error) => {
            console.error(error);
          });
        }
      });
      }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity style={styles.headerStyle} onPress={() =>
          navigate('ArtList')}>
          <View>
            <Text>MyList</Text>
          </View>
        </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectOCRTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.videoSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.videoSource} />
          }
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() =>
          navigate('Output', this.state.information)}
        >
          <View style={styles.textStyle}>
          <Text>Next</Text>
          </View>
        </TouchableOpacity>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 130,
    alignSelf: 'center',
    //backroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 10
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 15
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  headerStyle: {
		//backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'flex-end',
		height: 50,
		//paddingTop: 15,
    paddingRight: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},

});
