import React, { Component } from "react";
import axios from "axios";
import InformationHolder from "./Components/InformationHolder";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import AddMusic from "./Components/AddMusic";

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
    this.setState({ ui: event.target.value });
  }
  handleSubmit(event) {
    this.setState({ ui: event.target.value });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3030/api/songs", { mode: "cors" })
      .then((res) => {
        const songs = res.data;
        this.setState({ songs });
      });
  }

  componentDidUpdate() {}

  AddMusic = (createNewSong) => {
    console.log("From AddMusic component", createNewSong);
    this.songs.push(createNewSong);
    this.setState({
      songs: this.songs.length - 1,
    });
  };

  render() {
    return (
      <div className="Navlink">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="public\index.html">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              TBD
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              TBD
            </a>
          </li>
        </ul>
        <Header />
        <div className="search-bar">
          <SearchBar value={this.state.ui} handleChange={this.handleChange} />
        </div>
        <AddMusic createNewSong={this.createNewSong} />
        <InformationHolder songs={this.state.songs} ui={this.state.ui} />
      </div>
    );
  }
}

export default App;
