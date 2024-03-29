import React, {
  Component
} from 'react';
import hash from './hash';
import * as $ from "jquery";
import Player from './Player'
import './home.css';
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from './config';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{
            url: ""
          }]
        },
        name: "",
        artists: [{
          name: ""
        }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        console.log("data", data);
        if (data) {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms,
          });
        }
      }
    });
  }



  render() {
		return (
      <div>
        <h1>
          Welcome to Cloudify!
        </h1>

        <p>
          We are always listening...
        </p>

        <div className="App">
        <header className="App-header">
        {!this.state.token && (
          <a
          id ="wrapper"
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
            )}&response_type=token&show_dialog=true`}
          >
          Login to Spotify
          </a>
        )}
        {this.state.token && (
          <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.progress_ms}
          />
        )}
        </header>
        </div>
      </div>
		)

  }
}

export default Home;
