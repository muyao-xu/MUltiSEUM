import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ArtDetail = ({ art }) => {
  const { title, extract, url } = art;
  const {
          headerContentStyle,
          headerTextSytle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextSytle}>{title}</Text>
          <Text style = {{color: 'white'}}>{extract}</Text>
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
    justifyContent: 'space-around',
    color: 'white',
  },
  headerTextSytle: {
    fontSize: 18,
    color: 'white',
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
