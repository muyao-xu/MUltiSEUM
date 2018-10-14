import React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import ArtDetail from './ArtDetail';

class ArtList extends React.Component {
  state = { arts: [] };
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      //update the state once callback function get response
      .then(response => this.setState({ arts: response.data }));
  }

  renderArts() {
    return this.state.arts.map(art =>
      <ArtDetail key={art.title} art={art} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderArts()}
      </ScrollView>
    );
  }
}

export default ArtList;
