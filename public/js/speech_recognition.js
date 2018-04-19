////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Speech Recognition section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const words = document.querySelector('.words');
let p = document.querySelector('.input');

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;

    if (e.results[0].isFinal) {

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(search for)/i).test(transcript)) {
        searchSoundCloud(transcript.match(/(for)(.*)/i)[2]);
      }

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(play)/i).test(transcript)) {
        playSong(transcript.match(/(play)(.*)/i)[2]);
      }

      if ((/(jarvis)(?!.*((don\'t)|(stop)))(?!.*unmute).*(pause)/i).test(transcript)) {
        pauseSong();
      }

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(unpause)/i).test(transcript)) {
        unpauseSong();
      }

      if ((/(jarvis)(?!.*(don\'t))(?!.*unmute).*(mute)/i).test(transcript)) {
        muteVolume();
      }

      if ((/(jarvis)(?!.*(don\'t)).*(unmute)/i).test(transcript)) {
        unmuteVolume();
      }

      if ((/(jarvis)(?!.*(don\'t)).*(set).*(volume).*(\d+)/i).test(transcript)) {
        setVolume(transcript.match(/\d+/)[0]);
      }

      if ((/(jarvis)(?!.*(don\'t)).*(max)/i).test(transcript)) {
        setVolume(100);
      }

      if ((/(jarvis)(?!.*(don\'t)).*(skip).*(\d+).(seconds)/i).test(transcript)) {
        seekSong(transcript.match(/\d+/)[0]);
      }

      if ((/(jarvis)(?!.*(don\'t)).*(rewind).*(\d+).(seconds)/i).test(transcript)) {
        seekSong(-1 * transcript.match(/\d+/)[0]);
      }

      if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(start|beginning))|(jarvis).*(replay)/i).test(transcript)) {
        seekSong('begin');
      }

      if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(end))|(jarvis).*(stop)/i).test(transcript)) {
        seekSong('end');
      }

      if ((/(jarvis)(?!.*(don\'t)).*((go back)|rewind).*(\d+).(seconds)/i).test(transcript)) {
        seekSong(transcript.match(/\d+/)[0]);
      }
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Soundcloud widget section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const SC = require('soundcloud');
const SoundcloudWidget = require('soundcloud-widget');

const axios = require('axios');
const apiKey = 'AIzaSyBY9vqgOQZCQqgnK57pCXdFKR0YPCk9zFc';

// const cx = '017515603852271078757:yjhxuxng8z0';
const cx = '017515603852271078757:mnwqv4gxmce';

const clientId = 'oFtM3fjLWICzaDucukME93LEYf0KIXKM';
const appVersion = 1523891119;
SC.initialize({
  client_id: clientId
});

let widget = new SC.Widget(document.querySelector('.soundcloud-player'));
let currentVolume = 100;
let options = {
  auto_play: true,
  buying: false,
  liking: true,
  download: true,
  sharing: true,
  show_artwork: true,
  show_comments: false,
  show_playcount: true,
  show_user: true,
  start_track: 0
};

function searchSoundCloud(userInput) {
  SC.get('/tracks', {
    q: userInput, limit:10
  }).then(function(tracks) {
    showTracks(tracks);
  });

  // const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${userInput}`;
  // fetch(url).then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   if (myJson.collection.length > 0)
  //     // playSong(myJson.items[0].formattedUrl);
  //     console.log(myJson.collection[0].formattedUrl);
  //   else
  //     console.log('no song was found');
  // });
}

function playSong(userInput) {
  SC.get('/tracks', {
    q: userInput, limit:10
  }).then(function(tracks) {
    if (tracks.length > 0) {
      widget.load(tracks[0].uri, options);

      if (document.querySelector('.search-checkbox').checked)
        showTracks(tracks.slice(1));
      else {
        while (searchContainer.hasChildNodes()) {
          searchContainer.removeChild(searchContainer.lastChild);
        }
      }
    }
  });
}

function pauseSong() {
  widget.isPaused(paused => {
    if (!paused) widget.pause();
  });
}

function unpauseSong() {
  widget.isPaused(paused => {
    if (paused) widget.play();
  });
}

function muteVolume() {
  widget.getVolume(volume => {
    currentVolume = volume;
    widget.setVolume(0);
  });
}

function unmuteVolume() {
  widget.setVolume(currentVolume);
}

function setVolume(volume) {
  currentVolume = volume;
  widget.setVolume(currentVolume);
}

function seekSong(time) {
  if (time === 'begin') {
    widget.seekTo(0);
  } else if (time === 'end') {
    widget.getDuration(duration => widget.seekTo(duration));
  } else {
    widget.getPosition(position => {
      let currentTime = position + (time * 1000);
      widget.getDuration(duration => {
        if (currentTime >= 0 && currentTime <= duration)
          widget.seekTo(currentTime);
      });
    });
  }
}


const searchContainer = document.querySelector('.search-container');

function showTracks(tracks){
  for(let i = 0; i < tracks.length; i++){
    let trackContainer = document.createElement('div');
    let trackTitle = document.createElement('header');
    let trackImage = document.createElement('img');

    trackContainer.className = 'track-container';
    trackTitle.className = 'track-title';
    trackImage.className = 'track-image';

    if(tracks[i].artwork_url)
      trackImage.setAttribute('src', tracks[i].artwork_url);
    else
      trackImage.setAttribute('src', tracks[i].user.avatar_url);

    trackTitle.innerText = tracks[i].title;

    trackImage.setAttribute('title', tracks[i].title);
    trackImage.setAttribute('width', 70);
    trackImage.setAttribute('height', 70);
    trackImage.trackInfo = tracks[i];
    trackContainer.appendChild(trackImage);
    trackContainer.appendChild(trackTitle);
    trackContainer.onclick = () => widget.load(tracks[i].uri, options);
    searchContainer.appendChild(trackContainer);
  }
}
