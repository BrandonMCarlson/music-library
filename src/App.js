import React, { Component } from 'react';
import reactDom from 'react-dom';
import axios from 'axios';



class Library extends Component {
  state = { }

  componentDidMount() {
    this.makeGetRequest();
  }

  async makeGetRequest() {
    try{
      let response = await axios.get('http://www.devcodecampmusiclibrary.com/');
      console.log(response.data)
    }
    catch(ex) {
      console.log('Error in API call!');
    }
  }

  render() {
    return (
      <React.Fragment>
      <h1> Async Await Axios Example</h1>
      <button onClick={this.makeGetRequest}>Remake Call</button>
      </React.Fragment>
    )
  }
}

export default Library;