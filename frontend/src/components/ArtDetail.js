import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ArtDetail = ({ art }) => {
  const { title, extracts, url } = art;
  const {
          headerContentStyle,
          headerTextSytle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextSytle}>{title}</Text>
          <Text>{extracts}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Check More!
        </Button>
      </CardSection>
    </Card>

  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextSytle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 30,
    width: 30
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1, //takes the entire width
    width: null
  }
};
export default ArtDetail;
