import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Language extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            bgImage:require('./../images/wallpaper.jpg'),
            favLanguage: undefined,
            items: [
                {
                    label: 'Spanish',
                    value: 'es',
                },
                {
                    label: 'Italian',
                    value: 'it',
                },
                {
                    label: 'German',
                    value: 'de',
                },
                {
                    label: 'French',
                    value: 'fr',
                },
                {
                    label: 'Chinese',
                    value: 'zh',
                },
                {
                    label: 'English',
                    value: 'en',
                },
                {
                    label: 'Portuguese',
                    value: 'pt',
                },
            ],
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
          <ImageBackground source={this.state.bgImage}
            style={styles.bg}
          >
          <View>
            <TouchableOpacity style ={styles.myListButtonStyle} onPress={() =>
              navigate('ArtList')}>
              <View>
                <Text style={{  color: 'white' }}>MyList</Text>
              </View>
            </TouchableOpacity>
          <View style={styles.container}>
                <Text style={{ fontSize: 24, color: 'white' }} >What&rsquo;s the language you speak?</Text>
                <View style={{ paddingVertical: 5 }} />
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a Language...',
                        value: 'zh',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favLanguage: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favLanguage}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                  console.log(this.state.favLanguage);
                  fetch(`http://localhost:3000/language/${this.state.favLanguage}`)
                    .then((response) => {
                      navigate('Upload');
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}>
                  <View style={styles.textStyle}>
                  <Text style={{ color: 'white'} }>Upload photo</Text>
                  </View>
                </TouchableOpacity>

            </View>
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
        paddingTop: 150,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
        fontSize: 50,
    },
    textStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: '600',
    },
    buttonStyle: {
      //flex: 1,
      height: 50,
      width: 200,
      //justifyContent: 'center',
      alignSelf: 'center',
      // backroundColor: 'white',
      // borderWidth: 1,
      // borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 300,
      marginRight:40,
      marginLeft:40,

      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'white',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
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
    myListButtonStyle: {
      height: 20,
      width: 45,
      alignSelf: 'flex-end',
      //backroundColor: '#fff',
      //borderWidth: 0.5,
      //borderColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15
    }

});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
