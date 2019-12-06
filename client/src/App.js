import React from "react";
import axios from "axios";
import "./App.css";
import Dark from "./dark";

class App extends React.Component {
  state = {
    players: []
    // playerText: ""
  };

  componentDidMount() {
    console.log("cDM");
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({ players: response.data });
      console.log(response.data);
    });
  }

  fetchPlayers = e => {
    e.preventDefault();
    axios.get(`http://localhost:5000/api/players`).then(response => {
      // console.log(response);
      this.setState({ players: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Dark />
        <h1>Players List</h1>
        <button onClick={this.fetchplayers}>Fetch players</button>
        <div className="players">
          {this.state.players.map(player => (
            <div className="pDiv" key={player.name}>
              <h2>{player.name}</h2>
              <h4>{player.country}</h4>
              <h6>{player.searches} searches</h6>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

export default App;
