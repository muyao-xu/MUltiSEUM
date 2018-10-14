import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const Header = () => {
	const { headerStyle } = styles;
  //const { navigate } = this.props.navigation;
	return (
		<View style={headerStyle}>
      <TouchableOpacity onPress={() =>
        navigate('ArtList')}>
        <View>
          <Text>MyList</Text>
        </View>
      </TouchableOpacity>
		</View>
	);
};

const styles = {
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

};

export default Header;
