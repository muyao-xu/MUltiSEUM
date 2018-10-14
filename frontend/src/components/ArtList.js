import React from 'react';
import axios from 'axios';

import { View, ScrollView } from 'react-native';
//import axios from 'axios';
import ArtDetail from './ArtDetail';

class ArtList extends React.Component {
  state = { arts: [] };

  constructor() {
    super();
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3000/List')
    .then(response => {
      this.setState({ arts: response.data});
      // console.log(response)
    })
    .catch((error) => {
      console.error(error);
    });
    //axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      //update the state once callback function get response
      //.then(response => this.setState({ arts: response.data }));
  }


  renderArts() {
    var info = this.state.arts;
    return info.map(art =>
      <ArtDetail key={art.title} art={art} />
    );

    // return info.map(art =>
      // <ArtDetail key={art.title} art={art} />
    // {
    //   <Text></Text>
    // }

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
