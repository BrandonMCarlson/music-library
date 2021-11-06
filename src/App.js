import React, { Component } from 'react';
import axios from 'axios';
import InformationHolder from './Components/InformationHolder';
import 'bootstrap/dist/css/bootstrap.min.css';






class App extends Component {
  constructor() {
    super();
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
    })
  }

  componentDidUpdate() {}


  render() { 
    return ( 
      <div className="App">
        <InformationHolder songs={this.state.songs}/>
      </div>
     );
  }
}
 
export default App;

