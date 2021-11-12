import React, { Component } from 'react';
import axios from 'axios';
import InformationHolder from './Components/InformationHolder';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import "./App.css";







class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = { 
      songs: [],
      ui: "",
     };
  }
  
  handleChange(event) {
    this.setState({ui: event.target.value});
  }

  componentDidMount() {
    this.getAllsongs();
  }

  async getAllsongs() {
   let response = await axios.get('http://localhost:3000/api/songs');
    this.setState({
      songs: response.data
    });

  }

  async createMusic() {
    axios.post('http://localhost:3000/api/songs')
    .then((res) => {
      const songs = res.data;
      this.setState({songs});
    })

  }

  componentDidUpdate() {}


  render() { 
    return ( 
      
      <div className="Navlink">
      <ul class="nav nav-pills">
        <li class="nav-item">
        <a class="nav-link active" href="public\index.html">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">TBD</a>
        </li>
        <li class="nav-item">
    <a class="nav-link" href="#">TBD</a>
        </li>
      </ul>
      <Header/>
      <div className="search-bar">
          <SearchBar value={this.state.ui} handleChange={this.handleChange}/>
      </div>        
          <InformationHolder songs={this.state.songs} ui={this.state.ui} />
      </div>
     );
  }
}
 
export default App;

