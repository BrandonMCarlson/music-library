import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App  extends Component {
  state = {
    songs: []
  }

  componentDidMount(){
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/');
    this.setState({
      songs: response.data
    });
  }
}
 

export default App;
