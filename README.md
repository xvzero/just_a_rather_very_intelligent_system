# Just A Rather Very Intelligent System

### Background and Overview

Just A Rather Very Intelligent System (J.A.R.V.I.S) is a personal assistant that will search and play a song that the user requests through voice activation.  

Users can tell JARVIS to play/pause a song

### Functionality and MVP

With JARVIS, users will be able to (with voice commands):
- [ ] search for a song
- [ ] play/pause a song

In addition, this project will include:
- [ ] a GUI for users to manually search for songs
- [ ] a GUI for the audio player


Bonus?:
- [ ] a visualization of the song playing

### Wireframes

This app will be a single page web application that can be run in the background.  There will only be a small GUI so that users can minimize the window and place in the corner of their screen to see what's currently playing.  There will be an option to toggle on/off the audio visualization so that the web app eat up the computer's processor.

![app wireframe](https://i.imgur.com/O9Kn0vV.png)

### Architecture and Technologies

- Vanilla Javascript for audio player
- Webpack to bundle javascript files

Javascript files:

`speech_recognition.js`: script to handle speech recognition and to update DOM elements

`audio_player.js`: script to handle audio bar buttons

Bonus?:

`audio_visualizer.js`: script to handle audio visualization

### Implementation Timeline

**Over the weekend:**
- [x] Completed speech recognition tutorial
- [x] Research libraries and technologies required to build app

**Day 1:** Setup all Node modules. Create `webpack.config.js` as well as `package.json`. Create skeletons for all scripts.

**Day 2-3:** Create logic for handling speech recognition. Learn how to incorporate it into searching for songs from spotify/soundcloud/youtube

**Day 4:** Create CSS

### Bonus Features:

- [ ] Audio visualization presets
- [ ] Drag and drop audio files to play
- [ ] Personal Playlist
- [ ] Speech Response
- [ ] Add more functionality outside of songs
