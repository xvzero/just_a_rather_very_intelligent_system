# README

### Introduction

Just.A.Rather.Very.Intelligent.System, or Jarvis, is a voice activated personal assistant that plays music using the SoundCloud API.

Jarvis can be tested out [here](https://xvzero.github.io/just_a_rather_very_intelligent_system/)

### Technologies

- [Mozilla Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- [Soundcloud Widget API](https://developers.soundcloud.com/docs/api/html5-widget)

Development:

- Node.js as server to allow microphone usage

### Functionality

Users can do the following with voice commands:

- Search through SoundCloud's song database
- Play/Pause a song
- Set/Mute the volume
- Skip a number of seconds in the song
- Rewind a number of seconds in the song
- Go to the beginning/end of the song

![ui](https://media.giphy.com/media/3gK8oJjmnfVk1l2ybP/giphy.gif)


### Architecture and Technologies

- Vanilla Javascript for audio player
- Webpack to bundle javascript files

Javascript files:

`index.js`: entry file to bundle all javascript files

`speech_recognition.js`: script to handle speech recognition and to update DOM elements

Development files:

`app.js`: to create backend server to allow microphone usage

### Handling User Input

Once the user says something, it is rendered through the Speech Recognition API and becomes a readable string.  The string is then searched for specific keywords and phrases through RegEx in order to determine the next course of action.

```
if ((/(jarvis)(?!.*((don\'t)|(stop))).*(search for)/i).test(transcript)) {
  searchSoundCloud(transcript.match(/(for)(.*)/i)[2]);
}

if ((/(jarvis)(?!.*((don\'t)|(stop))).*(play)/i).test(transcript)) {
  playSong(transcript.match(/(play)(.*)/i)[2]);
}

if ((/(jarvis)(?!.*((don\'t)|(stop)))(?!.*unmute).*(pause)/i).test(transcript)) {
  pauseSong();
}
```

### Technical Challenges

I am not really sure how to make an AI with speech recognition so I had to settle with hardcoding regular expressions. I also have no clue how I would go about building my own voice recognition software so I have to settle for using an API.

### Future Features:

I hope to eventually add these implementations 

- Audio visualization presets
- Drag and drop audio files to play
- Personal Playlist
- Speech Response
- Add more functionality outside of songs
