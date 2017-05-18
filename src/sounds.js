import React, { Component } from 'react';
import Sound from 'react-sound';

class Sounds extends Component {

  // loadSound(() => {
  //   createjs.Sound.registerSound("assets/thunder.mp3", soundID);
  // });

  render() {
    return (
      <Sound
        url="assets/gameover.wav"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
