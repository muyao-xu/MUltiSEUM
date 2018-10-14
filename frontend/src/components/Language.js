import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Language extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
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
            <View style={styles.container}>

                <View style={{ paddingVertical: 5 }} />

                <Text styles={styles.textStyle}>What&rsquo;s the language you speak?</Text>
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

                <TouchableOpacity style={styles.buttonStyle} onPress={() =>
                  navigate('Upload')}>
                  <Text style={styles.textStyle}>
                    Upload
                  </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    textStyle: {
        fontSize: 50
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
// import React from 'react';
// import { Text, View } from 'react-native';
// import DropdownMenu from 'react-native-modal-dropdown';
//
// export default class Language extends React.Component {
//   render() {
//     //let data = [["C", 'Java', "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
//     const data = [{
//       value: 'Banana',
//     }, {
//       value: 'Mango',
//     }, {
//       value: 'Pear',
//     }];
//     return (
//       <View>
//         <Text style={styles.textStyle}>Please select a language</Text>
//         <Text style={styles.textStyle}>English</Text>
//
//         <View>
//           <DropdownMenu.Dropdown
//           label='Favorite Fruit'
//           data={data}
//           />
//         </View>
//
//       </View>
//     );
//   }
// }
//
// const styles = {
//   headerStyle: {
//     fontSize: 50,
//     marginTop: 150,
//     alignSelf: 'center'
//   }
// };
