import React from 'react';
import { Text, View } from 'react-native';

export default class Language extends React.Component {
  render() {
    //let data = [["C", 'Java', "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    const data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    return (
      <View>
        <Text style={styles.textStyle}>Please select a language</Text>
        <Text style={styles.textStyle}>English</Text>

      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 50,
    marginTop: 150,
    alignSelf: 'center'
  }
};
