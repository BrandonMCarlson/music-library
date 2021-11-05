import React, { Component } from 'react';
import reactDom from 'react-dom';
import './App.css';
import axios from 'axios';
import InformationHolder from './Components/InformationHolder'

export default class Library extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    // GET request using axios with error handling
    axios.get('http://www.devcodecampmusiclibrary.com/')
        .then(response => this.setState({ totalReactPackages: response.data.total }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
}
  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}

