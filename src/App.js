import React, { Component } from 'react';
import reactDom from 'react-dom';
import axios from 'axios';
import InformationHolder from './Components/InformationHolder';
import ReactTable from 'react-table';
import Bootstrap from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
     };
  }

  async componentDidMount() {
    await axios.get('http://www.devcodecampmusiclibrary.com/api/music/')
    .then((res) => {
      console.log(res)
      const songs = res.data;
      this.setState({songs});
    });
  }
  render() { 
    return ( 
      <div>
        <InformationHolder songs={this.state.songs} /> 
      </div>
     );
  }
}
 
export default App;

